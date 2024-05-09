import { SettingsBar } from './settingsbar'

//This components displays the assistant images along with basic settings
export const ImageCard = () => {

    return  <section
    className="image-card relative min-h-[460px] h-[460px] flex items-end"
    >
        <SettingsBar/>
        <div className="w-full ps-12 py-1 z-10">
            <span className="inline-block w-full text-lg font-bold">Jessica Anderson</span>
            <span className="inline-block w-full text-sm">@jesicca-anderson-2</span>
        </div>
        <div className="shadow-bottom absolute bottom-0 w-full h-16"></div>
    </section>
}