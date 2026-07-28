// @ts-check

import { ChatbotView } from './views/chatBotView.js';
import { PromptService } from './services/promptService.js'
import { ChatbotController } from './controllers/chatBotController.js';

function isChrome() {
    const ua = navigator.userAgent;
    return (
        ua.indexOf("Chrome") > -1 &&
        ua.indexOf("Edg") === -1 &&
        ua.indexOf("OPR") === -1
    );
}

function createWidgetHTML() {
    return `
        <button id="yagasaki-open-btn" class="yagasaki-btn" aria-label="Abrir chat">
            <span class="yagasaki-btn-avatar-wrapper">
                <img id="yagasaki-icon" alt="Chatbot" src="../../botData/avatar.png" />
                <span class="yagasaki-btn-badge">1</span>
            </span>
        </button>
        <div class="yagasaki-chat-window" id="yagasaki-chat-window" style="display:none">
            <div class="yagasaki-chat-header">
                <img src="../../botData/avatar.png" alt="Bot logo" class="yagasaki-chat-header-logo" id="yagasaki-header-icon" />
                <span class="yagasaki-chatbot-name" id="yagasaki-chatbot-name"></span>
                <button class="yagasaki-close-btn" id="yagasaki-close-btn">&times;</button>
            </div>
            <div class="yagasaki-chat-body" id="yagasaki-messages"></div>
            <form class="yagasaki-chat-footer" id="yagasaki-form" autocomplete="off">
                <input type="text" id="yagasaki-input" placeholder="Digite sua mensagem..." autocomplete="off" />
                <button type="submit" id="yagasaki-submit">Enviar</button>
            </form>
        </div>
    `;
}

function ensureWidget() {
    let widget = document.getElementById('yagasaki-widget');
    if (!widget) {
        console.log('🔧 Widget não encontrado, criando...');
        widget = document.createElement('div');
        widget.id = 'yagasaki-widget';
        widget.style.display = 'none';
        widget.innerHTML = createWidgetHTML();
        document.body.appendChild(widget);
        console.log('✅ Widget criado com sucesso');
    }
    return widget;
}

function showWidget() {
    const widget = ensureWidget();
    if (!widget) {
        console.error('❌ Widget não encontrado');
        return false;
    }

    if (isChrome()) {
        widget.style.display = 'block';
        console.log('✅ Chrome detectado - Widget visível');
        return true;
    } else {
        widget.style.display = 'none';
        console.log('❌ Navegador não suportado - Widget oculto');
        return false;
    }
}

async function initChatbot() {
    console.log('🚀 Inicializando chatbot...');

    const isChromeBrowser = showWidget();

    if (!isChromeBrowser) {
        console.log('⛔ Chatbot não inicializado - Navegador não suportado');
        return;
    }

    const root = new URL('../../', import.meta.url);
    // @ts-ignore
    const fromMainProject = (path) => new URL(path, root).toString();

    const [css, config, llmsTxt] = await Promise.all([
        fetch(fromMainProject('../..yagasaki-chatbot.css')).then(r => r.text()),
        fetch('../../botData/chatbot-config.json').then(r => r.json()),
        fetch('/llms.txt').then(r => r.text()),
    ]);

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const systemPrompt = llmsTxt;

    console.log('📝 System prompt carregado, tamanho:', systemPrompt.length);
    console.log('📄 llms.txt carregado, tamanho:', llmsTxt.length);

    const promptService = new PromptService();
    const chatbotView = new ChatbotView(config);
    const controller = new ChatbotController({ chatbotView, promptService });

    await controller.init({
        firstBotMessage: config.welcomeBubble || "Hello! How can I help your business today?",
        text: systemPrompt,
    });

    console.log('✅ Chatbot inicializado com sucesso!');
}

initChatbot();