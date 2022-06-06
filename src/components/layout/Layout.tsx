import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import cn from "classnames";

const Layout = ({children}: {children: ReactNode}) => {
    const contextTheme = useContext(ThemeContext);
    return (
        <div className={cn("layout", {
            dark: !contextTheme?.theme,
        })}>
            {children}  
        </div>
    )
}

export { Layout }