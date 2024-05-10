import { CameraAlt, MapsUgc, Lock, Share, BorderColorOutlined } from "@mui/icons-material"

//Displays all essential assistant details
export const UserDetails = () => {

    return <div className="userdetails flex-1 flex flex-col px-4 lg2:px-7 py-3 gap-2.5">
        <section
        className="px-6 py-2.5 rounded-xl flex justify-between gap-4 bg-navgray"
        >
            <span className="text-[14px] flex items-center gap-1.5">
                <CameraAlt sx={{fontSize:14}}/>
                <span>0</span>
                <MapsUgc sx={{fontSize:14}}/>
                <span>6</span>
            </span>
            <span className="text-[14px] flex items-center gap-1.5">
                <span className="hidden lg2:flex items-center gap-1.5">
                    <Lock sx={{fontSize:14, opacity:.5}}/>
                    <span>Make Character Public</span>
                </span>
                <Share sx={{fontSize:14}}/>
            </span>
        </section>
        <section className="flex flex-col lg2:flex-row h-fit lg2:max-h-[690px] overflow-hidden gap-4 lg2:gap-2 bg-navgray rounded-xl p-4">
            <section
            className="flex w-full lg2:w-[45%] flex-col gap-3 [&>*]:flex [&>*]:flex-col
            [&>span>span:nth-child(1)]:font-bold [&>span>span]:text-sm"
            >
                <span className="font-bold">Who I Am</span>
                <span>
                    <span>Personality</span>
                    <span>Caregiver</span>
                </span>
                <span>
                    <span>Work</span>
                    <span>Yoga Instructor</span>
                </span>
                <span>
                    <span>Hobbies</span>
                    <span>Anime Fan</span>
                </span>
                <span>
                    <span>Relationship</span>
                    <span>Friend</span>
                </span>
            </section>
            <section className="w-full lg2:w-[55%] flex flex-col gap-3 overflow-hidden">
                <span className="flex justify-between items-center">
                    <span className="font-bold">About Me</span>
                    <BorderColorOutlined sx={{fontSize:18}}/>
                </span>
                <p className="text-[16px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur possimus, delectus recusandae nesciunt laudantium dicta accusamus sequi beatae quos eaque perspiciatis commodi voluptas aperiam ex aut doloremque in veritatis asperiores ducimus pariatur eos dolores temporibus. In aperiam, aspernatur vero ipsum sit explicabo. Nesciunt sint, ad nisi in quam cum ea deleniti autem, beatae doloribus aliquid repellendus voluptatibus commodi, ex sunt iure id. Voluptatum qui dicta deleniti labore voluptatem aliquam delectus.
                </p>
            </section>
        </section>
    </div>
}