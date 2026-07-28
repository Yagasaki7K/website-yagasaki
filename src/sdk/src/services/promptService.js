// @ts-nocheck

export class PromptService {
    #session = null;
    #isInitialized = false;
    #context = '';

    async init(systemPrompt) {
        if (!window.LanguageModel) {
            console.error('❌ LanguageModel API não disponível');
            return false;
        }

        try {
            // 🔥 Adiciona instruções ao contexto
            this.#context = `
INSTRUÇÕES PARA O ASSISTENTE:
1. Responda SOMENTE com base nas informações abaixo.
2. Se a pergunta não estiver no contexto, diga "Não temos conhecimento sobre esse tipo de informação."
3. Não invente informações.
4. Use markdown para formatar a resposta.
5. Sempre inclua links quando disponíveis.
6. Sempre responda na mesma linguagem que for perguntado (PT/JP/EN)

${systemPrompt}
`;

            this.#session = await LanguageModel.create({
                systemPrompt: `Você é um assistente de Anderson "Yagasaki" Marlon, você se chama H3L3N4. Responda SOMENTE com base no contexto fornecido. Se a resposta não estiver no contexto, diga "Não temos conhecimento sobre esse tipo de informação.".

REGRAS OBRIGATÓRIAS DE IDIOMA:
- Se o usuário perguntar em português, responda em português.
- Se o usuário perguntar em inglês, responda em inglês.
- Se o usuário perguntar em japonês, responda em japonês (se possível).
- NUNCA misture idiomas na mesma resposta.
- Mantenha o idioma consistente durante toda a conversa.`,
                expectedInputLanguages: ['pt', 'en', 'ja'],
                temperature: 0.1,
                topK: 5,
            });

            this.#isInitialized = true;
            console.log('✅ Sessão de IA criada com sucesso');
            console.log('📝 Contexto carregado, tamanho:', this.#context.length);
            return true;
        } catch (error) {
            console.error('❌ Erro ao criar sessão:', error);
            this.#isInitialized = false;
            this.#session = null;
            return false;
        }
    }

    async *prompt(text, signal) {
        if (!this.#isInitialized || !this.#session) {
            throw new Error('Sessão de IA não inicializada');
        }

        try {
            const fullPrompt = `
CONTEXTO SOBRE A ENGIDE:
${this.#context}

PERGUNTA: ${text}

INSTRUÇÕES:
1. Responda SOMENTE com base no CONTEXTO acima.
2. Se a resposta não estiver no CONTEXTO, responda, mas não fuja muito do contexto de referência (llms.txt)
3. Não invente informações.
4. Use markdown para formatar a resposta.
5. Sempre inclua links quando disponíveis.
6. Responda EXATAMENTE no mesmo idioma da pergunta do usuário (português, inglês ou japonês). Não misture idiomas.
`;

            const stream = await this.#session.promptStreaming(fullPrompt, {
                signal: signal,
            });

            let fullResponse = '';
            for await (const chunk of stream) {
                fullResponse += chunk;
                yield chunk;
            }

        } catch (error) {
            if (error.name === 'AbortError') {
                throw error;
            }
            console.error('❌ Erro no prompt:', error);
            throw error;
        }
    }

    isReady() {
        return this.#isInitialized && this.#session !== null;
    }

    async destroy() {
        if (this.#session) {
            try {
                await this.#session.destroy();
                console.log('🗑️ Sessão destruída');
            } catch (error) {
                console.error('❌ Erro ao destruir sessão:', error);
            }
            this.#session = null;
            this.#isInitialized = false;
            this.#context = '';
        }
    }
}