import html from "../../../assets/tecnologias_svg/html.svg"
import css from "../../../assets/tecnologias_svg/css.svg"
import js from "../../../assets/tecnologias_svg/js.svg"
import tailwindcss from "../../../assets/tecnologias_svg/tailwindcss.svg"
import react from "../../../assets/tecnologias_svg/react.svg"
import vitejs from "../../../assets/tecnologias_svg/vitejs.svg"

function Iconos_Front_End() {
    return (
        <>
            <div className="space-y-2">
                <h1 className="text-center text-lg text-gray-800">
                    Front End:
                </h1>
                <div className="flex">
                    <img className="w-14" src={html} alt="html_svg" />
                    <img className="w-14" src={css} alt="css_svg" />
                    <img className="w-14" src={js} alt="js_svg" />
                    <img
                        className="w-14"
                        src={tailwindcss}
                        alt="tailwind_css_svg"
                    />
                    <img className="w-14" src={react} alt="react_ssvg" />
                    <img className="w-11" src={vitejs} alt="vite_js_svg" />
                </div>
            </div>
        </>
    )
}

export default Iconos_Front_End
