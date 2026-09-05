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
        <div>
            <strong>Prompt do usuário:</strong>
            <pre>${userInput.value}</pre>
        </div>
        <div>
            <strong>Resposta da IA:</strong>
            <pre>${aiResponse[0].content}</pre>
        </div>
    `;
})
