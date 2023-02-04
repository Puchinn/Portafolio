import foto from "../assets/foto-perfil.webp"
import linkedin from "../assets/linkedin.svg"
import github from  "../assets/github.svg"

function Perfil(){
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

                        <img 
                        className="w-9"
                        src={linkedin} alt="linkedin-svg" />

                        <img 
                        className="w-9"
                        src={github} alt="github-svg" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil