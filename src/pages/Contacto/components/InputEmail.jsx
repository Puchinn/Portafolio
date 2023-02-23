function InputEmail() {
    return (
        <div className="flex flex-col text-start">
            <label
                className="text-base text-gray-700 dark:text-white"
                htmlFor="email"
            >
                Email :
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className=" rounded-md border-4 border-gray-300 p-3 text-base outline-none dark:text-black"
                placeholder="Escribe tu email"
                required
            />
        </div>
    )
}

export default InputEmail
