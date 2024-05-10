import { VolumeUp, ThumbUp, ThumbDown, Loop, 
    PlayCircle, BorderColor, ContentCopy } from "@mui/icons-material"
import profile from "../../../assets/profile.jpg"
import { iconStyling } from "./chatdisplay"
import { useContext } from "react"
import { chatContext } from "../chatpanel"
import { Loading } from "../loading/loadingcomp"

//separate component with different layout and styling for assistant
export const AssistantMessage = ({ message, index, len }) => {
    const { loading } = useContext(chatContext);

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
            {
                (index === len-1 && loading)
                ? <Loading/>
                : <span className="text-[15px] min-w-4">{ message }</span>
            }
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