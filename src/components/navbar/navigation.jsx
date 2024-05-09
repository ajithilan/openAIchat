import {
    AccountCircleOutlined,
    ArrowDropDown,
    Textsms,
    People,
    CameraAlt,
    Favorite
} from '@mui/icons-material';

//Navigation component
export const Navigation = () => {
    
    return <div
        className="navigation flex justify-between items-center bg-navgray h-14"
        >
        <section className='px-8 flex flex-col pt-2 cursor-default'>
            <span className='flex items-center gap-1 h-8 font-semibold text-[22px]'>
                <span>secret</span>
                <span className='inline-flex items-center bg-primepink px-1 rounded-md h-7'>desires</span>
            </span>
            <span className='text-[10px] text-[rgba(255,255,255,.5)] place-self-start -translate-y-2'>Open Beta</span>
        </section>
        <section className='flex gap-8 h-full'>
            <button
            className="flex items-center gap-1 text-primepink border-b-2 border-b-primepink px-4"
            >
                <Textsms sx={{fontSize:20}}/>
                <span className='font-semibold'>Chat</span>
            </button>
            <button
            className="flex items-center gap-1"
            >
                <People sx={{fontSize:20}}/>
                <span className='font-semibold'>My Characters</span>
            </button>
            <button
            className="flex items-center gap-1"
            >
                <CameraAlt sx={{fontSize:20}}/>
                <span className='font-semibold'>Generate Images</span>
            </button>
            <button
            className="flex items-center gap-1 h-9 place-self-center rounded-lg px-2 bg-primepink"
            >
                <Favorite/>
                <span className='font-semibold'>Create Character</span>
            </button>
        </section>
        <section className='flex items-center gap-1 pr-6'>
            <AccountCircleOutlined sx={{}}/>
            <span className='pointer-events-none'><span className='font-semibold'>My Profile</span><ArrowDropDown/></span>
        </section>
    </div>
}