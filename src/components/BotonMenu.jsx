import { Link } from "react-router-dom"

function BotonMenu({ name, isActive, onClick }){
    return(
        <>  
            <Link
                onClick={()=> onClick(name)}
                to={name}
                className={`w-11 bg-white inline-block rounded-r-sm h-32 transition-[width] ease-in  opacity-30
                ${isActive ? ' opacity-50 w-16': ''}`}
                >   
            </Link>
        </>
    )
}

export default BotonMenu