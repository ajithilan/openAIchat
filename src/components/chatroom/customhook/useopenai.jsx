
//Created a custom hook to fetch data from "gryphe" model
//Gets called only when user inputs a message and submits
export const useOpenAI = async (content) => {
    const OPENROUTER_API_KEY = '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';

    try{
        const response =  await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "gryphe/mythomist-7b:free",
                "messages": [
                {"role": "user", "content": content},
                ],
            })
        });
        if(!response.ok){
            throw new Error("Failed to fetch messages");
        }
        const fetchedMessage = await response.json();
        return fetchedMessage.choices[0].message;
    }
    catch(error){
        console.log(error);
        return null;
    }
}