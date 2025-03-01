import { Ollama } from "@langchain/ollama";
async function main(){

    const model = new Ollama({
        model : "qwen2.5-coder:3b",
    })
    
    const response = await model.invoke('hello')

    console.log(response)

    const response1 = await model.streamLog(['hello', 'how are you'])

    // console.log(response)
    for await (const chunk of response1){
        console.log(chunk)
    }
}

main()