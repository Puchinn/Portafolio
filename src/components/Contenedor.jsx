import Menu from "./Menu"

function Contenedor({children}){
    return(
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="flex -space-x-6 w-full justify-center ">
                    <div className="p-9 w-5/6 rounded-3xl z-10 bg-opacity-50 bg-slate-500">
                        {children}
                    </div>
                    <div className="self-center">
                        <Menu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contenedor