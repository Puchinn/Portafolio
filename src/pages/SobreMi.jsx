import SobreMitext from "../components/SobreMitext"
import Foto from "../components/Foto"
import Teconologias from "../components/Tecnologias"

function SobreMi() {
    return (
        <>
            <div className="max-w-5xl">
                <h1 className="py-5 pl-10 text-4xl font-thin text-slate-700">
                    Sobre Mi:
                </h1>
                <div className="flex h-2/3 items-center justify-between gap-x-5 border-y border-gray-300 p-5 py-12">
                    <Foto />
                    <div className="flex flex-col justify-between border-x-2 border-gray-700 p-4">
                        <SobreMitext />
                        <Teconologias />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SobreMi
