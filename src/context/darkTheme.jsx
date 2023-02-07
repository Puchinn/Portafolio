import { createContext, useState } from "react"

const ThemeContext = createContext(null)

function ContextContainer({ children }) {
    const [isDark, setIsDark] = useState(false)

    return (
        <>
            <ThemeContext.Provider value={[isDark, setIsDark]}>
                <div className={`App ${!isDark && "dark"}`}>{children}</div>
            </ThemeContext.Provider>
        </>
    )
}

export default ContextContainer
