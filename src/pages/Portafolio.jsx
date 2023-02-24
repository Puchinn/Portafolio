import Titulo from "../components/Titulo"

function Portafolio() {
    return (
        <div className="text-slate-700 dark:text-white animate-entrada-suave">
            <Titulo titulo={"Portafolio"} />
            <div className="text-center">
            <h1 className="text-4xl sm:text-6xl py-3 ">Y los proyectos ? 😳</h1>
            <h1 className="text-3xl sm:text-5xl ">no hay...</h1>
            <h1 className="text-3xl sm:text-5xl">(work in progress)</h1>
            </div>
        </div>
    )
}

export default Portafolio
