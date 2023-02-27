import Gmail from "./Gmail"
import GitHub from "./GitHub"
import Linkedin from "./Linkedin"

function Footer() {
    return (
        <div className="pt-8">
            <div className="flex items-center justify-center space-x-2">
                <Gmail />
                <GitHub />
                <Linkedin />
            </div>
            <h1 className="py-3 text-center text-sm text-gray-800 dark:text-white ">
                Portafolio hecho por Esteban Sayago en react ©2023
            </h1>
        </div>
    )
}

export default Footer
