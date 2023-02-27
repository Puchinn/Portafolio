import fondoClaro from "../assets/fondos/fondoClaro.png"
import fondoOscuro from "../assets/fondos/fondoOscuro.png"
import { useContext } from "react"
import { ThemeContext } from "../context/darkTheme"

function FondoDePagina() {
    const [color] = useContext(ThemeContext)

    return (
        <div
            className="absolute top-0 left-0 -z-10 h-screen w-screen  bg-cover  bg-no-repeat"
            style={{
                backgroundImage: `url(${
                    color === "dark" ? fondoOscuro : fondoClaro
                })`,
            }}
        ></div>
    )
}

export default FondoDePagina
