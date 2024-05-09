
//Implemented a custom switch component for the text option above input in chat panel
export const CustomSwitch = () => {
    
    const handleSwitch = (e) => {
        e.target.classList.toggle('active');
    }

    return <div
    className="switch"
    onClick={ handleSwitch }
    ></div>
}