import {
    ArrowBackIosNew,
    MoreVert,
    Build,
    Woman,
    BorderColorOutlined,
    Close
} from "@mui/icons-material"

export const SettingsBar = () => {

    return <div className="shadow-top absolute top-0 w-full flex justify-between gap-2 p-2">
        <section className="flex gap-4 text-sm">
            <button className="flex items-center gap-1">
                <ArrowBackIosNew sx={{fontSize:20}}/>
                <span>Chats</span>
            </button>
            <span className="hidden lg2:block">img: 3</span>
            <span className="hidden lg2:block">msg:</span>
        </section>
        <section className="flex gap-3">
            <MoreVert sx={{fontSize:20}}/>
            <span className="hidden lg2:flex gap-3">
                <Build sx={{fontSize:20}}/>
                <Woman sx={{fontSize:20}}/>
                <BorderColorOutlined sx={{fontSize:20}}/>
            </span>
            <button className="flex justify-center">
                <Close sx={{fontSize:20}}/>
            </button>
        </section>
    </div>
}