import { useContext, useEffect } from "react";
import { BsSun } from "react-icons/bs";
import { MdOutlineModeNight } from "react-icons/md"
import { ThemeContext } from "../providers/ThemeProvider";

const ThemeToggleButton: React.FC = () => {
    const currentTheme = useContext(ThemeContext);

    useEffect(() => {
        const currentThemeLS = localStorage.getItem("currentTheme");

        if(currentThemeLS === "false") {
            currentTheme?.setTheme(false);
        } else {
            currentTheme?.setTheme(true);
            localStorage.setItem("currentTheme", "true");
        }
    }, [])

    function toggleCurrentTheme () {
        currentTheme?.setTheme(!currentTheme.theme)
        localStorage.setItem("currentTheme", JSON.stringify(!currentTheme?.theme))
    }

    return (
        <div className="flex justify-center mb-5 cursor-pointer">
            {currentTheme?.theme 
            ?   <MdOutlineModeNight size={28} onClick={toggleCurrentTheme} />
            :   <BsSun size={28} onClick={toggleCurrentTheme}/>}
        </div>
    )
}

export { ThemeToggleButton }