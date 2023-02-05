import BotonMenu from "./BotonMenu"
import { useState } from "react"

function Menu(){

    const [activeButton, setActiveButton] = useState('/')

    const handleButtonClick = (url) => {
        setActiveButton(url);
    }

    return(
        <>
            <nav className="flex flex-col space-y-5">
                <BotonMenu 
                    url="/" 
                    onClick={handleButtonClick}
                    activeButton={activeButton}

                />
                <BotonMenu 
                    url="proyectos" 
                    onClick={handleButtonClick}
                    activeButton={activeButton}
                />
                <BotonMenu 
                    url="contacto" 
                    onClick={handleButtonClick}
                    activeButton={activeButton}
                />
            </nav>
        </>
    )
}

export default Menu