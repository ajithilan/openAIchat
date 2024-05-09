import { VolumeUp, ThumbUp, ThumbDown, Loop, 
    PlayCircle, BorderColor, ContentCopy } from "@mui/icons-material"
import profile from "../../../assets/profile.webp"
import { iconStyling } from "./chatdisplay"

//separate component with different layout and styling for assistant
export const AssistantMessage = ({ message }) => {

    return <div className="flex flex-col items-start">
        <section className="flex items-center gap-2 py-2">
            <img
            src={ profile }
            alt="profile image"
            width={30}
            height={30}
            className="rounded-full"
            />
            <span className="text-sm text-[rgba(255,255,255,.5)] cursor-default">Jessica</span>
        </section>
        <section className="w-fit h-fit flex p-2 ml-6 rounded-b-xl rounded-tr-xl bg-primepink">
            <span className="text-[15px]">{ message }</span>
        </section>
        <section className="flex items-center gap-4 py-3 ps-8">
            <VolumeUp sx={ iconStyling }/>
            <ThumbUp sx={ iconStyling }/>
            <ThumbDown sx={ iconStyling }/>
            <Loop sx={ iconStyling }/>
            <PlayCircle sx={ iconStyling }/>
            <BorderColor sx={ iconStyling }/>
            <ContentCopy sx={ iconStyling }/>
        </section>
    </div>
}