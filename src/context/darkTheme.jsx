import { useState, createContext } from 'react'
import fondoOscuro from '../assets/fondos/fondoOscuro.png'
import fondoClaro from '../assets/fondos/fondoClaro.png'

export const ThemeContext = createContext(null)

function ContextContainer({ children }) {
  const [color, setColor] = useState('dark')

  return (
    <ThemeContext.Provider value={[color, setColor]}>
      <div
        className={`App flex h-screen items-center justify-center bg-cover bg-no-repeat px-1 py-1 ${color}`}
        style={{
          backgroundImage: `url(${
            color === 'dark' ? fondoOscuro : fondoClaro
          })`,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ContextContainer
