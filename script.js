const currentChat = document.querySelector("#iresponses")
const userInput = document.querySelector("#iuserinput input")
const sendBtn = document.querySelector("#iuserinput button")

sendBtn.addEventListener("click", async () => {
    
    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question: userInput.value
        })
    })

    const aiResponse = await response.json()

    currentChat.innerHTML = `
        Prompt do usuário: 
        ${userInput.value}

        Resposta da IA: 
        ${aiResponse[0].content}
    `
})
