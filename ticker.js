export { llMarqueeCallback };
import * as webllm from "https://esm.run/@mlc-ai/web-llm";
import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

const SLEEP_INTERVAL = 250;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Ticker {
  constructor() {
    this.loaded = false;
  }

  async init() {
    // Callback function to update model loading progress
    const initProgressCallback = (initProgress) => {
      console.log(initProgress);
      if (initProgress.progress == 1) {
        this.loaded = true;
      }
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
    console.log("this.testLLMCall");
    if (!this.loaded) {
      return sleep(SLEEP_INTERVAL).then(() => this.testLLMCall(prompt));
    }
    console.log("stopped waiting");
    const messages = [
      { role: "system", content: "You are generating the ticker of a news feed. Be precise, concise, and nice" },
      { role: "user", content: prompt },
    ];
    console.log('reply?');
    const reply = await this.engine.chat.completions.create({
      messages,
    });
    console.log(reply);
    console.log(reply.usage);
    return reply.choices[0].message.content;
  }
}

const ticker = new Ticker();

var llMarqueeCallback = ticker.llMarqueeCallback.bind(ticker);

window.addEventListener('load', async function() {
  await ticker.init();
})

