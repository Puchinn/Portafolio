import html from "../../../assets/tecnologias/html.svg"
import css from "../../../assets/tecnologias/css.svg"
import js from "../../../assets/tecnologias/js.svg"
import tailwindcss from "../../../assets/tecnologias/tailwindcss.svg"
import react from "../../../assets/tecnologias/react.svg"
import vitejs from "../../../assets/tecnologias/vitejs.svg"
import git from "../../../assets/tecnologias/git.svg"
import npm from "../../../assets/tecnologias/npm.svg"
import github from "../../../assets/tecnologias/github.svg"

function Iconos() {
    return (
        <div className="flex flex-wrap justify-center md:justify-start space-x-1 md:space-x-3">
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

export default Iconos
