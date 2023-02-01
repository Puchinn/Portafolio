import { Link } from "react-router-dom"

function BotonMenu({ name, isActive, onClick }){
    return(
        <>  
            <Link
                onClick={()=> onClick(name)}
                to={name}
                className={`w-11 bg-white inline-block rounded-r-lg h-32 transition-all opacity-30
                ${isActive ? ' opacity-50 w-16': ''}`}
                >   
            </Link>
        </>
    )
}

export default BotonMenu