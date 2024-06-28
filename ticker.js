import * as webllm from "https://esm.run/@mlc-ai/web-llm";
import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";


async function init() {
  // Callback function to update model loading progress
  const initProgressCallback = (initProgress) => {
    console.log(initProgress);
  }
  const selectedModel = "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC-1k";

  const engine = await CreateMLCEngine(
    selectedModel,
    { initProgressCallback: initProgressCallback }, // engineConfig
  );
} 


function llMarqueeCallback(prompt) {

}

window.addEventListener('load', async function() {
  await init();
})

