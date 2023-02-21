function Input_textarea() {
    return (
        <div className="flex flex-col text-start">
            <label
                className="text-base text-gray-700 dark:text-white"
                htmlFor="mensanje"
            >
                Mensaje :
            </label>
            <textarea
                style={{ resize: "none" }}
                name="texto"
                placeholder="Ej: Me gustaria trabajar contigo (minimo 20 caracteres)"
                className="rounded-md border-4 border-gray-300 p-3 text-base outline-none dark:text-black"
                id="mensaje"
                cols="30"
                rows="5"
                minLength={20}
                required
            ></textarea>
        </div>
    )
}

export default Input_textarea
