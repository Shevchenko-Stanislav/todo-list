import { 
    createContext, 
    Dispatch, 
    SetStateAction, 
    useState, 
    ReactNode,
    useMemo 
} from "react";

interface IContext {
    theme: boolean,
    setTheme: Dispatch<SetStateAction<boolean>>
}

interface IChildren {
    children: ReactNode
}

const ThemeContext = createContext<IContext | null>(null);

const ThemeProvider = ({children}: IChildren) => {
    const [isLight, setIsLight] = useState<boolean>(true);

    const value = useMemo<IContext>(() => ({
        theme: isLight, 
        setTheme: setIsLight
    }), [isLight]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }