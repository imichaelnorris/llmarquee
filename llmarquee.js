// LLMarquee acts as an HTML Marquee with text generated from a prompt
class LLMarquee extends HTMLElement {
    static get observedAttributes() {
        return ['prompt'];
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.content = document.createElement('div');
        shadow.appendChild(this.content);
        this.addEventListener("animationend", this.animationend);
    }

    connectedCallback() {
        this.updateContent();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'prompt' && oldValue !== newValue) {
            this.updateContent();
        }
    }

    async updateContent() {
        const prompt = this.getAttribute('prompt');
        if (prompt) {
            const responseText = await this.fetchLLMResponse(prompt);
            this.content.textContent = responseText;
        } else {
            this.content.textContent = 'Loading...';
        }
    }

    async fetchLLMResponse(prompt) {
        // llMarqueeCallback(prompt)
        // Placeholder for LLM API call.
        // Replace this with the actual API call to get the response.
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Response for prompt: ${prompt}`);
            }, 1000);
        });
    }

    animationend(event) {
        this.updateContent();
    }
}

customElements.get('ll-marquee') || customElements.define('ll-marquee', LLMarquee);
