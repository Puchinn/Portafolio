function Input_nombre() {
    return (
        <div className="flex flex-col text-start">
            <label
                className="text-base text-gray-700 dark:text-white"
                htmlFor="nombre"
            >
                Nombre :
            </label>
            <input
                id="nombre"
                type="text"
                name="nombre"
                className=" rounded-md border-4 border-gray-300 p-3 text-base outline-none dark:text-black"
                placeholder="Escribe tu nombre"
                required
            />
        </div>
    )
}

export default Input_nombre
