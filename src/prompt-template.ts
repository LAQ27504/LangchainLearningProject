import { Ollama } from "@langchain/ollama";
import {ChatPromptTemplate} from "@langchain/core/prompts"

async function main(){
    const model = new Ollama({
        model: "qwen2.5-coder:3b",
        temperature: 0.7
    })
    
    const prompt = ChatPromptTemplate.fromTemplate(
        'You are a comedian. Tell me a joke based on the following word {input}'
    )
    
    console.log(await prompt.format({ input: "coding"}))

    //create chain 
    const chain = prompt.pipe(model);

    //call chain
    const response = await chain.invoke(
        {
            input: "coding"
        }
    )
    console.log(response)

}

main()
