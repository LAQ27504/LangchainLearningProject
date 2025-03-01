"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ollama_1 = require("@langchain/ollama");
var model = new ollama_1.Ollama({
    model: "qwen2.5-coder:3b",
});
var response = await model.invoke('hello');
console.log(response);
