export { llMarqueeCallback };
import * as webllm from "https://esm.run/@mlc-ai/web-llm";
import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

class Ticker {
  async init() {
    // Callback function to update model loading progress
    const initProgressCallback = (initProgress) => {
      console.log(initProgress);
    }
    const selectedModel = "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC-1k";
  
    this.engine = await CreateMLCEngine(
      selectedModel,
      { initProgressCallback: initProgressCallback }, // engineConfig
    );
  } 
  
  
  llMarqueeCallback(prompt) {
    return new Promise((resolve) => {
      resolve(this.testLLMCall(prompt));
    });
  }
  
  async testLLMCall(prompt) {
    const messages = [
      { role: "system", content: "You are generating the ticker of a news feed. Be precise, concise, and nice" },
      { role: "user", content: prompt },
    ];
    const reply = await this.engine.chat.completions.create({
      messages,
    });
    console.log(reply.usage);
    return reply.choices[0].message;
  }
}

const ticker = new Ticker();

var llMarqueeCallback = ticker.llMarqueeCallback;

window.addEventListener('load', async function() {
  await ticker.init();
})

