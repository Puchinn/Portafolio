import { useState, createContext } from "react"

export const ThemeContext = createContext(null)

function ContextContainer({ children }) {
    const [isDark, setIsDark] = useState(false)
    const [isActive, setIsActive] = useState(true)

    return (
        <ThemeContext.Provider
            value={[isDark, setIsDark, isActive, setIsActive]}
        >
            <div className={`App ${isDark ? "dark" : ""}`}>{children}</div>
        </ThemeContext.Provider>
    )
}

export default ContextContainer
