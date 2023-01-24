import css from "../assets/css.svg"
import git from "../assets/git.svg"
import html from "../assets/html.svg"
import javascript from "../assets/javascript.svg"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwind.svg"
import vitejs from "../assets/vitejs.svg"
import Icono from "./Icono"

function Teconologias(){
    return(
        <>
            <div className="max-w-max inline-block">
                <div className="flex flex-col p-4 gap-4">
                    <h1 className="text-3xl text-center ">Teconologias</h1>
                    <div className="flex items-center flex-col gap-3">
                        <div className="flex gap-3">
                            <Icono url={html} titulo="HTML"/>
                            <Icono url={css} titulo="CSS"/>
                            <Icono url={javascript} titulo="JAVASCRIPT"/>
                            <Icono url={react} titulo="REACT"/>
                        </div>
                        <div className="flex gap-3">
                            <Icono url={tailwind} titulo="TAILWIND"/>
                            <Icono url={git} titulo="GIT"/>
                            <Icono url={vitejs} titulo="VITEJS"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teconologias