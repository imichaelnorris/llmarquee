# LLMarquee
A Web Component that acts as a Marquee and uses a Large (actually Small) Language Model to generate text.

# Example
To create your own ll-marquee, add this to your page (and import some stuff, and write a little JavaScript file that does LLM-y things).

<ll-marquee prompt="Say a list of 10 colors separated by commas"></ll-marquee>

# Demo
[https://michaelnorris.com/llmarquee/]("Demo")

## Overview
index.html --> Example page

llmarquee.js --> The HTML Component

llmarquee.css --> The style

ticker.js --> The implementation

# TODO
docs: https://www.jsdelivr.com/package/npm/@mlc-ai/web-llm

~[1] Add Tiny LLama (smallest models on https://github.com/mlc-ai/web-llm/blob/main/src/config.ts#L293)~

[2] Add an initProgressCallback so users will see that it's loading (:

[3] Accept streaming updates to llmarquee.js. This will simulate a stock ticker or news feed.

# Why
Why not?

Because I can.

Because little new tickers and stock tickers are my favorite part about games like SimCity and Neopets.
