function Formulario() {
    return (
        <div className="w-full rounded-2xl border-4 border-[#b0c2f2] dark:border-white py-3 px-4 ">
            <h1 className="text-center text-xl text-gray-700 tracking-wide dark:text-white ">Formulario de contacto</h1>

            <form action="" className="mx-auto mt-2 mb-0 space-y-2">
                <div className="flex flex-col text-start">
                    <label className="text-base text-gray-700 dark:text-white" for="nombre">
                        Nombre :
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        className=" rounded-md border-4 border-gray-300 dark:text-black p-3 text-base outline-none"
                        placeholder="Escribe tu nombre"
                    />
                </div>
                <div className="flex flex-col text-start">
                    <label className="text-base text-gray-700 dark:text-white" for="email">
                        Email :
                    </label>
                    <input
                        id="email"
                        type="email"
                        className=" rounded-md border-4 border-gray-300 dark:text-black p-3 text-base outline-none"
                        placeholder="Escribe tu email"
                    />
                </div>
                <div className="flex flex-col text-start">
                    <label className="text-base text-gray-700 dark:text-white" for="mensanje">
                        Mensaje :
                    </label>
                    <textarea
                        placeholder="Ej: Me gustaria trabajar contigo"
                        className="rounded-md border-4 border-gray-300 dark:text-black p-3 text-base outline-none"
                        id="mensaje"
                        cols="30"
                        rows="5"
                    ></textarea>
                </div>
                <button className="w-full text-lg rounded-lg bg-blue-500 hover:bg-blue-400 py-2 text-white">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Formulario
