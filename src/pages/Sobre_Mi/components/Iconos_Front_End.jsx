import html from "../../../assets/tecnologias_svg/html.svg"
import css from "../../../assets/tecnologias_svg/css.svg"
import js from "../../../assets/tecnologias_svg/js.svg"
import tailwindcss from "../../../assets/tecnologias_svg/tailwindcss.svg"
import react from "../../../assets/tecnologias_svg/react.svg"
import vitejs from "../../../assets/tecnologias_svg/vitejs.svg"
import git from "../../../assets/tecnologias_svg/git.svg"
import npm from "../../../assets/tecnologias_svg/npm.svg"
import github from "../../../assets/tecnologias_svg/github.svg"

function Iconos_Front_End() {
    return (
        <div className="flex space-x-3">
            <img className="w-14" src={html} title="HTML" alt="html_svg" />
            <img className="w-14" src={css} title="CSS" alt="css_svg" />
            <img className="w-12" src={js} title="JAVA SCRIPT" alt="js_svg" />
            <img
                className="w-14"
                src={tailwindcss}
                title="TAILWINND CSS"
                alt="tailwind_css_svg"
            />
            <img className="w-14" src={react} title="REACT" alt="react_ssvg" />
            <img
                className="w-11"
                src={vitejs}
                title="VITE JS"
                alt="vite_js_svg"
            />
            <img className="w-14" src={git} alt="git_svg" title="GIT" />
            <img className="w-14" src={github} alt="git_svg" title="GITHUB" />
            <img className="w-14" src={npm} alt="npm_svg" title="NPM" />
        </div>
    )
}

export default Iconos_Front_End
