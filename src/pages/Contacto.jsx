import Animacion_paginas from "../components/Animacion_paginas"

function Contacto() {
    return (
        <Animacion_paginas>
            <div className="max-w-4xl space-y-3 text-center mx-auto">
                <h1 className="text-3xl">
                    Casi es el final y queria decirte gracias por pasarte por
                    aqui!
                </h1>
                <p className="text-lg">
                    Si quieres tener una visión mas técnica sobre mi o ver mi
                    curriculum vitae, puedes hacerlo en el boton de abajo que te
                    permitira visualizar el documento y si quieres tambien
                    descargarlo.
                </p>
                <button className="rounded-lg bg-slate-300 py-2 px-6">
                    Ver CV
                </button>
                <h1 className="text-xl">Contacta conmigo</h1>
                <div className="space-x-4">
                    <button className="hover:underline">Linkedin</button>
                    <button className="hover:underline">GitHub</button>
                    <button className="hover:underline">Email</button>
                    <button className="hover:underline">Instagram</button>
                </div>
                <h1 className="text-lg">
                    Por ultimo puedes ver mis certificaciones y cursos donde he
                    estudiado
                </h1>
            </div>
        </Animacion_paginas>
    )
}

export default Contacto
