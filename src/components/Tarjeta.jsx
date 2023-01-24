import foto from "../assets/perfiiil.jpg"

function Tarjeta(){
    return (
        <>
            <div className="p-3 inline-block">
                <div className="flex flex-col gap-y-2">
                    <div>
                        <img 
                        className="rounded-full border-4 border-gray-600 
                        max-w-xs lg:max-w-sm"
                        src={foto} alt="foto-de-perfil-xiao" />
                    </div>

                    <h2 className="text-center text-2xl lg:text-3xl">Esteban Sayago</h2>

                    <div className=" flex justify-center gap-x-3">

                        <div className=" inline-block p-5 bg-slate-400 rounded-full"></div>
                        <div className=" inline-block p-5 bg-slate-400 rounded-full"></div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Tarjeta