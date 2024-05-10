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
        className="navigation flex justify-between items-center bg-navgray h-14 gap-2 md:gap-5 lg:gap-10"
        >
        <section className='flex flex-col pl-8 xs:pl-4 md:pl-4 lg:pl-8 pt-2 cursor-default'>
            <span className='flex items-center gap-1 h-8 font-semibold text-[22px]'>
                <span>secret</span>
                <span className='inline-flex items-center bg-primepink px-1 rounded-md h-7'>desires</span>
            </span>
            <span className='text-[10px] text-[rgba(255,255,255,.5)] place-self-start -translate-y-2'>Open Beta</span>
        </section>
        <section className='flex h-full gap-6 lg:gap-8'>
            <button
            className="hidden sm:flex items-center gap-1 text-primepink border-b-2 border-b-primepink px-4"
            >
                <Textsms sx={{fontSize:20}}/>
                <span className='font-semibold'>Chat</span>
            </button>
            <button
            className="hidden md:flex items-center gap-1"
            >
                <People sx={{fontSize:20}}/>
                <span className='font-semibold whitespace-nowrap'>My Characters</span>
            </button>
            <button
            className="hidden md:flex items-center gap-1"
            >
                <CameraAlt sx={{fontSize:20}}/>
                <span className='font-semibold whitespace-nowrap'>Generate Images</span>
            </button>
            <button
            className="hidden lg:flex items-center gap-1 h-9 place-self-center rounded-lg px-2 bg-primepink"
            >
                <Favorite/>
                <span className='font-semibold whitespace-nowrap'>Create Character</span>
            </button>
        </section>
        <section className='flex items-center gap-1 xs:pr-2 pr-6 md:pr-2 lg:pr-6 flex-nowrap'>
            <AccountCircleOutlined sx={{}}/>
            <span className='flex items-center flex-nowrap pointer-events-none'>
                <span className='font-semibold whitespace-nowrap'>My Profile</span>
                <ArrowDropDown/>
            </span>
        </section>
    </div>
}