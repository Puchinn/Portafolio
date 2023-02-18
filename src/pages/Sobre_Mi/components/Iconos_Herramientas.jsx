import git from "../../../assets/tecnologias_svg/git.svg"
import npm from "../../../assets/tecnologias_svg/npm.svg"

function Iconos_Herramientas() {
    return (
        <div className="space-y-2">
            <h1 className="text-center text-lg text-gray-800 dark:text-white">Herramientas:</h1>
            <div className="flex space-x-2">
                <img className="w-14" src={git} alt="git_svg" title="GIT" />
                <img className="w-14" src={npm} alt="npm_svg" title="NPM" />
            </div>
        </div>
    )
}

export default Iconos_Herramientas
