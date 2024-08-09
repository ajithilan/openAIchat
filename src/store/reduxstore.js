import { createSlice } from "@reduxjs/toolkit";


//Redux store for storing chat history between user and assistant
//Added dialogues from design to message history for visual appeal
const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messageHistory: [
            {
                role: 'user',
                message: "Hey Jessica, How was your day?",
                time:'1234'
            },
            {
                role: 'assistant',
                message: `Hey there! My day's been pretty smooth, thanks for asking. Just zipping through a bunch of tasks and keeping things running smoothly. How about you? How's your day shaping up? Any exciting plans or just the usual hustle? 😄`,
                time:'4312'
            },
        ]
    },
    reducers: {
        setMessage : ( state, action ) => {
            const newMessage = state.messageHistory;
            newMessage.push(action.payload);
            state.messageHistory = newMessage;
        },
        updateMessage: ( state, action ) => {
            const updatedMessage = state.messageHistory;
            const len = updatedMessage.length;
            updatedMessage[len-1].message = action.payload.message;
            updatedMessage[len-1].time = action.payload.time;
            state.messageHistory = updatedMessage;
        }
    }
});

export const { setMessage, updateMessage } = chatSlice.actions
export default chatSlice.reducer