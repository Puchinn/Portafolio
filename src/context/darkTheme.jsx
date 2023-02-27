import { useState, createContext, useEffect } from "react"

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
            setColor(colorModeQuery.matches ? "dark" : "light")
            colorModeQuery.addEventListener("change", (event) => {
                setColor(event.matches ? "dark" : "light")
            })
        }
    }, [])

    return (
        <ThemeContext.Provider value={[color, setColor]}>
            <div className={`App ${color === "dark" ? "dark" : ""} flex h-screen w-screen items-center justify-center px-1 py-1`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ContextContainer
