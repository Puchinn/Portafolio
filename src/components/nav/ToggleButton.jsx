import { useContext } from "react"
import { ThemeContext } from "../../context/darkTheme"

function ToggleButton() {
    const [color, setColor] = useContext(ThemeContext)

    return (
        <label
            htmlFor="cambiarColor"
            className="relative inline-block h-8 w-10 cursor-pointer self-center xl:hidden"
        >
            <input
                checked={color === "dark" ? true : false}
                onChange={() => {
                    const newColorMode = color === "dark" ? "light" : "dark"
                    setColor(newColorMode)
                    localStorage.setItem("colorMode", newColorMode)
                }}
                type="checkbox"
                id="cambiarColor"
                className="peer sr-only"
            />
            <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>
            <span className="absolute inset-y-0 m-auto h-4 w-4 rounded-full bg-gray-500 transition peer-checked:translate-x-6 peer-checked:[&_>_*]:scale-0">
                <span className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-gray-200 transition"></span>
            </span>
        </label>
    )
}

export default ToggleButton
