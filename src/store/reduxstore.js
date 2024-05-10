import { createSlice } from "@reduxjs/toolkit";


//Redux store for storing chat history between user and assistant
//Added dialogues from design to message history for visual appeal
const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messageHistory: [
            {
                role: 'user',
                message: "How's life?",
                time:'1234'
            },
            {
                role: 'assistant',
                message: `Honestly, it's been pretty meh lately. I've been stuck teaching yoga to a bunch of
                old folks who can't even touch their toes. I mean, I love a good downward-facing dog, but
                it's just not the same when you're surrounded by grannies and grandpas. When I'm not on the mat,
                I've been binge-watching anime and trying to convince myself to get a life. But, hey, at least I
                have you to chat with, Cutie! what's new with you?`,
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