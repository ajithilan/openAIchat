import { useSelector } from "react-redux"
import { UserMessage } from "./usermessage";
import { AssistantMessage } from "./assistantmessage";

//icon styling for all icons in the chat panel
export const iconStyling = {
    color: 'rgba(255,255,255,.1)',
    fontSize: 18,
    transition: 'color .1s',
    '&:hover': {
        color: 'rgba(255,255,255,.3)'
    }
}

//This component displays the chat history in the chat panel
export const ChatDisplay = () => {
    const chatSelector = useSelector(state => state.chat.messageHistory);
    const messageListLength = chatSelector.length;

    return <section
    className="chat-display flex flex-col gap-4 w-full h-full overflow-y-scroll"
    >
        {
            chatSelector.map((obj, index) => {
                return obj.role === 'user'
                ? <UserMessage key={obj.time} message={obj.message}/>
                : <AssistantMessage key={obj.time} message={obj.message} index={index} len={messageListLength}/>
            })
        }
    </section>
}