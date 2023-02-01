function Tarjeta({src,titulo,eActivo,setActivo}){

    const activo = titulo === eActivo

    return(
        <>
            <div className="w-3/4 bg-slate-300 h-28 rounded-lg relative" onClick={()=> setActivo(titulo)} >

                <img src={src} alt=""  className="rounded-lg w-full max-h-full object-cover object-center blur-[2px] " />
                <div className={`absolute top-0 left-0 bg-black w-full h-full rounded-lg text-white bg-opacity-40 text-center flex flex-col justify-center p-2 ${activo&& "bg-opacity-80"}`}>
                    <h2 className={`text-2xl ${activo && "text-lime-600"}`}>{titulo}</h2>
                </div>

            </div>

        </>
    )
}

export default Tarjeta