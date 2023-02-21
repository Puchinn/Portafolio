import bgClaro from "../assets/t2.svg"
import bgOscuro from "../assets/t4.svg"
import { useContext } from "react"
import { ThemeContext } from "../context/darkTheme"

function Background() {
    const [color] = useContext(ThemeContext)
    return (
        <>
            <div
                className="absolute top-0 left-0 -z-10 h-screen w-screen bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${color === "dark" ? bgOscuro : bgClaro})` }}
            ></div>
        </>
    )
}

export default Background
