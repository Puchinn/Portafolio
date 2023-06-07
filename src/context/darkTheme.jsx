import { useState, createContext } from 'react'

export const ThemeContext = createContext(null)

function ContextContainer({ children }) {
  const [color, setColor] = useState('dark')

  return (
    <ThemeContext.Provider value={[color, setColor]}>
      <div
        className={`App ${
          color ?? ''
        } flex h-screen w-screen items-center justify-center px-1 py-1`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ContextContainer
