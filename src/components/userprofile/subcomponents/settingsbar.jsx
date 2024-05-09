import {
    ArrowBackIosNew,
    MoreVert,
    Build,
    Woman,
    BorderColorOutlined,
    Close
} from "@mui/icons-material"

export const SettingsBar = () => {

    return <div className="shadow-top absolute top-0 w-full flex justify-between p-2">
        <section className="flex gap-4 text-sm">
            <button className="flex items-center gap-1">
                <ArrowBackIosNew sx={{fontSize:20}}/>
                <span>Chats</span>
            </button>
            <span>img: 3</span>
            <span>msg:</span>
        </section>
        <section className="flex gap-3">
            <MoreVert sx={{fontSize:20}}/>
            <Build sx={{fontSize:20}}/>
            <Woman sx={{fontSize:20}}/>
            <BorderColorOutlined sx={{fontSize:20}}/>
            <button className="flex justify-center">
                <Close sx={{fontSize:20}}/>
            </button>
        </section>
    </div>
}