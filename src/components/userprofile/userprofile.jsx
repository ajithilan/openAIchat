import { ImageCard } from "./subcomponents/imagecard"
import { UserDetails } from "./subcomponents/userdetails"

//This component displays details about the assistant
export const UserProfile = () => {

    return <div
    className="user-profile hidden lg:flex  w-[500px] flex-col overflow-y-scroll overflow-x-hidden"
    >
        <ImageCard/>
        <UserDetails/>
    </div>
}