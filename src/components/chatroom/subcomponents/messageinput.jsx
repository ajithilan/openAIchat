import { Telegram } from "@mui/icons-material";
import { CustomSwitch } from "./customswitch"
import { useContext } from "react";
import { chatContext } from "../chatpanel";

//This component holds the input for the user to enter a query
export const MessageInput = ({ handleSubmit }) => {
    const { textRef } = useContext(chatContext);

    return <section className="w-full flex justify-center items-center">
        <div>
            <section className="w-full flex justify-end items-center p-1 pr-[52px]">
                <span className="pr-1.5 text-primepink">text</span>
                <CustomSwitch/>
            </section>
            <form onSubmit={ handleSubmit }>
                <section className="flex items-center gap-2">
                    <textarea
                    ref={ textRef }
                    name="message-input"
                    className="resize-none w-[720px] h-11 bg-transparent placeholder:text-[rgba(163,163,163,0.6)]
                    p-2 overflow-hidden focus:outline-none border-2 border-red-600 rounded-md"
                    placeholder="Type a message here..."
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e) }
                    >
                    </textarea>
                    <button
                    type="submit"
                    className="w-11 h-11 rounded-full transition-background ease-in-out duration-200  bg-[rgba(155,155,155,0.5)] hover:bg-[rgba(155,155,155,0.7)]"
                    >
                        <Telegram/>
                    </button>
                </section>
            </form>
        </div>
    </section>
}