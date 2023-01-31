import BotonDM from "../components/BotonDM"
import SobreMi from "../components/SobreMi"
import Tecnologias from "../components/Tecnologias"
import Perfil from "../components/Perfil"
import Titulo from "../components/Titulo"

function Principal(){
    return(
        <>
                <div className="relative">
                    <div className="absolute right-10">
                        <BotonDM />
                    </div>
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col">
                            <Perfil />
                            <SobreMi />
                        </div>
                        <div className="flex flex-col justify-between space-y-16  items-center">
                            <Titulo />
                            <Tecnologias />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Principal