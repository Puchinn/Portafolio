import { useState, createContext, useEffect } from "react"
import BotonDM from "../components/BotonDM"

export const ThemeContext = createContext(null)

function ContextContainer({ children }) {
    const [color, setColor] = useState(null)

    useEffect(() => {
        const localColorMode = localStorage.getItem("colorMode")
        if (localColorMode) {
            setColor(localColorMode)
        } else {
            const colorModeQuery = window.matchMedia(
                "(prefers-color-scheme: dark)"
            )
            setColor(colorModeQuery.matches ? 'dark' : 'light')
            colorModeQuery.addEventListener("change",(event) => {
                setColor(event.matches ? 'dark' : 'light')
            })
        }
    }, [])

    return (
        <ThemeContext.Provider value={[color, setColor]}>
            <div className={`App ${color === "dark" ? "dark" : ""}`}>
                <BotonDM />
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ContextContainer
