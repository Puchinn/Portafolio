function Icono({url,titulo}){
    return(
    <>
        <div 
        className="hover:cursor-pointer w-20 hover:-translate-y-2 relative transition-all group flex flex-col items-center">
            
            <span 
            className="rounded-2xl bg-gray-500 text-white border-gray-700 border-2 text-center max-w-min px-2 mb-2 hidden absolute -top-9 group-hover:inline-block text-base">
                
            {titulo}</span>

            <img src={url} alt={titulo}/>
        </div>
    </>
    )
}

export default Icono