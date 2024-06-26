import { useState, useRef, useEffect, createContext } from "react";
import { useOpenAI } from "./customhook/useopenai";
import { MessageInput } from "./subcomponents/messageinput";
import { ChatDisplay } from "./subcomponents/chatdisplay";
import { useDispatch } from "react-redux";
import { setMessage, updateMessage } from "../../store/reduxstore";

//context API incase of future expansion
export const chatContext = createContext(null);

//This component displays the chat history along with textarea for getting input message
export const ChatPanel = () => {
    const dispatch = useDispatch();
    const [ content, setContent ] = useState('');
    const [ loading, setLoading ]= useState(false);
    const textRef = useRef(null);
    const timeoutId = useRef(null);

    //Makes the window scroll to latest message
    function scrollToNewmessage(){
        const chatDisplay = document.querySelector('.chat-display');
        setTimeout(() => {
            chatDisplay.scrollTo({ top: chatDisplay.scrollHeight, behavior: 'smooth' });
        }, 300);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearTimeout(timeoutId.current);
        //debouncing to stop multiple submits within a short span.
        timeoutId.current = setTimeout(() => {
            const query = textRef.current.value.trim();
            //checks if query(entered message) is empty space
            if(query){
                dispatch(setMessage({ role: 'user', message: query, time: Date.now() }));
                setTimeout(() => {
                    dispatch(setMessage({ role: 'assistant', message: '', time: Date.now() }));
                    scrollToNewmessage();
                }, 1000);
                setLoading(true);
                setContent(query);
                scrollToNewmessage();
            }
            textRef.current.value = '';
        }, 300);
    }

    useEffect(() => {
        //fetches message from API if user sends a message(stored in content)
        async function fetchMessage(){
            const receivedMessage = await useOpenAI(content);
            setLoading(false);
            dispatch(updateMessage({ message: receivedMessage.content, time: Date.now() }));
            scrollToNewmessage();
        }
        if(content) fetchMessage();
    },[content])

    const contextValues = {
        textRef,
        loading
    }

    return <div className="chatpanel flex-1 flex flex-col justify-between p-4 pb-8">
        <chatContext.Provider value={ contextValues }>
            <ChatDisplay/>
            <MessageInput handleSubmit={ handleSubmit }/>
        </chatContext.Provider>
    </div>
}