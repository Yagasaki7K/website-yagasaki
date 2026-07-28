// @ts-nocheck

/**
 * @typedef {import("../views/chatBotView.js").ChatbotView} ChatBotView
 * @typedef {import("../services/promptService.js").PromptService} PromptService
 */

export class ChatbotController {
    #abortController;
    #chatbotView;
    #promptService;

    constructor({ chatbotView, promptService }) {
        this.#chatbotView = chatbotView;
        this.#promptService = promptService;
    }

    async init({ firstBotMessage, text }) {
        this.#setupEvents();
        this.#chatbotView.renderWelcomeBubble();
        this.#chatbotView.setInputEnabled(false);

        try {
            const initialized = await this.#promptService.init(text);

            if (initialized) {
                this.#chatbotView.appendBotMessage(firstBotMessage, null, false);
                this.#chatbotView.setInputEnabled(true);
                this.#chatbotView.hideTypingIndicator();
                console.log('✅ Chatbot inicializado com sucesso');
            } else {
                this.#chatbotView.appendBotMessage(
                    "❌ Não foi possível carregar o modelo de IA. Verifique se as flags experimentais estão ativas no Chrome."
                );
                this.#chatbotView.setInputEnabled(false);
            }

            return initialized;
        } catch (error) {
            console.error('❌ Erro na inicialização:', error);
            this.#chatbotView.appendBotMessage(
                "❌ Erro ao inicializar o assistente. Por favor, recarregue a página e tente novamente."
            );
            this.#chatbotView.setInputEnabled(false);
            return false;
        }
    }

    #setupEvents() {
        this.#chatbotView.setupEventHandlers({
            onOpen: this.#onOpen.bind(this),
            onSend: this.#chatBotReply.bind(this),
            onStop: this.#handleStop.bind(this),
        });
    }

    #handleStop() {
        if (this.#abortController) {
            this.#abortController.abort();
        }
    }

    async #chatBotReply(userMsg) {
        if (!this.#promptService.isReady()) {
            this.#chatbotView.appendBotMessage(
                "⚠️ O modelo de IA ainda não está carregado. Aguarde um momento e tente novamente."
            );
            return;
        }

        this.#chatbotView.showTypingIndicator();
        this.#chatbotView.setInputEnabled(false);

        try {
            this.#abortController = new AbortController();

            const contentNode = this.#chatbotView.createStreamingBotMessage();
            const response = this.#promptService.prompt(
                userMsg,
                this.#abortController.signal,
            );

            let fullResponse = '';
            let lastMessage = 'noop';

            const updateText = () => {
                if (!fullResponse) return;
                if (fullResponse === lastMessage) return;

                lastMessage = fullResponse;
                this.#chatbotView.hideTypingIndicator();
                this.#chatbotView.updateStreamingBotMessage(contentNode, fullResponse);
            };

            const intervalId = setInterval(updateText, 200);

            const stopGenerating = () => {
                clearInterval(intervalId);
                updateText();
                this.#chatbotView.setInputEnabled(true);
            };

            this.#abortController.signal.addEventListener('abort', stopGenerating);

            for await (const chunk of response) {
                if (!chunk) continue;
                fullResponse += chunk;
            }

            console.log('✅ Resposta completa:', fullResponse);
            stopGenerating();

        } catch (error) {
            this.#chatbotView.hideTypingIndicator();

            if (error.name === 'AbortError') {
                console.log('⏹️ Requisição abortada pelo usuário');
                this.#chatbotView.setInputEnabled(true);
                return;
            }

            console.error('❌ Erro no prompt:', error);
            this.#chatbotView.appendBotMessage(
                "❌ Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente."
            );
            this.#chatbotView.setInputEnabled(true);
        }
    }

    async #onOpen() {
        const errors = this.#checkRequirements();
        if (errors.length) {
            const messages = errors.join('\n\n');
            this.#chatbotView.appendBotMessage(messages);
            this.#chatbotView.setInputEnabled(false);
            return;
        }

        if (!this.#promptService.isReady()) {
            this.#chatbotView.appendBotMessage(
                "⏳ O modelo de IA está sendo carregado. Aguarde alguns instantes..."
            );
            this.#chatbotView.setInputEnabled(false);

            try {
                // Tenta recarregar o modelo usando o mesmo texto do sistema
                // Usa um texto padrão já que não temos acesso ao #systemPrompt
                const defaultPrompt = "Você é um assistente útil do Yagasaki, especializado em tecnologia e desenvolvimento de software.";
                const initialized = await this.#promptService.init(defaultPrompt);
                if (initialized) {
                    this.#chatbotView.appendBotMessage(
                        "✅ Modelo carregado com sucesso! Como posso ajudá-lo?"
                    );
                    this.#chatbotView.setInputEnabled(true);
                }
            } catch (error) {
                console.error('❌ Erro ao recarregar modelo:', error);
                this.#chatbotView.appendBotMessage(
                    "❌ Erro ao carregar o modelo. Verifique as flags experimentais do Chrome."
                );
            }
        } else {
            this.#chatbotView.setInputEnabled(true);
        }
    }

    #checkRequirements() {
        const errors = [];

        if (!('LanguageModel' in window)) {
            errors.push(
                "⚠️ As APIs nativas de IA não estão ativas.",
                "Ative a seguinte flag em chrome://flags/:",
                "- Prompt API for Gemini Nano (chrome://flags/#prompt-api-for-gemini-nano)",
                "Depois reinicie o Chrome e tente novamente."
            );
            return errors;
        }

        if (!this.#promptService.isReady()) {
            errors.push(
                "⏳ O modelo de IA ainda está sendo carregado...",
                "Aguarde alguns segundos e tente novamente."
            );
        }

        return errors;
    }
}