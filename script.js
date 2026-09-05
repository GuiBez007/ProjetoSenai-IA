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
    <div style="margin-bottom: 20px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
        <strong style="color: #333;">Prompt do usuário:</strong>
        <pre style="white-space: pre-wrap; word-wrap: break-word; color: #555; font-family: 'Courier New', Courier, monospace;">${userInput.value}</pre>
    </div>
    <div style="margin-bottom: 20px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; background-color: #f1f1f1;">
        <strong style="color: #333;">Resposta da IA:</strong>
        <pre style="white-space: pre-wrap; word-wrap: break-word; color: #007BFF; font-family: 'Courier New', Courier, monospace;">${aiResponse[0].content}</pre>
    </div>
`;
})
