import BotonMenu from "./BotonMenu"
import { useState } from "react"

function Menu(){

    const [activeButton, setActiveButton] = useState('/');
    const handleButtonClick = (name) => {
        setActiveButton(name);
    }



    return(
        <>
            <nav className="flex flex-col space-y-5">
                <BotonMenu 
                    name="/" 
                    isActive={activeButton === '/'} 
                    onClick={handleButtonClick}
                />
                <BotonMenu 
                    name="proyectos" 
                    isActive={activeButton === 'proyectos'} 
                    onClick={handleButtonClick}
                />
                <BotonMenu 
                    name="contacto" 
                    isActive={activeButton === 'contacto'} 
                    onClick={handleButtonClick}
                />
            </nav>
        </>
    )
}

export default Menu