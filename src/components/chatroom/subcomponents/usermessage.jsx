import { BorderColor, ContentCopy } from "@mui/icons-material"
import profile from "../../../assets/profile.jpg"
import { iconStyling } from "./chatdisplay"

//separate component with different layout and styling for user
export const UserMessage = ({ message }) => {

    return <div className="flex flex-col items-end">
        <section className="flex items-center gap-2 py-2 pr-4">
            <span className="text-sm text-[rgba(255,255,255,.5)] cursor-default">Anonymous</span>
            <img
            src={ profile }
            alt="profile image"
            width={30}
            height={30}
            className="rounded-full"
            />
        </section>
        <section className="w-fit h-fit flex p-2 rounded-b-xl rounded-tl-xl bg-navgray">
            <span className="text-[15px]">{ message }</span>
        </section>
        <section className="flex items-center gap-4 py-3 pr-5">
            <BorderColor sx={ iconStyling }/>
            <ContentCopy sx={ iconStyling }/>
        </section>
    </div>
}