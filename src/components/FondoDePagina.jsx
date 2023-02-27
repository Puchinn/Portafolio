import fondoClaro from "../assets/fondos/fondoClaro.png"
import fondoOscuro from "../assets/fondos/fondoOscuro.png"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/darkTheme"

function cacheImages(images) {
    return images.map((src) => {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.src = src
            img.onload = resolve
            img.onerror = reject
        })
    })
}

function FondoDePagina() {
    const [color] = useContext(ThemeContext)

    useEffect(() => {
        const images = [fondoOscuro, fondoClaro]
        cacheImages(images)
    }, [color])

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
