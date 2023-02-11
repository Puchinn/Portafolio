function Tarjeta({ src, titulo, eActivo, setActivo }) {
    const activo = titulo === eActivo

    return (
        <>
            <div
                className="relative h-28 w-3/4 cursor-pointer rounded-lg  bg-slate-300"
                onClick={() => setActivo(titulo)}
            >
                <img
                    src={src}
                    alt=""
                    className="max-h-full w-full rounded-lg object-cover object-center blur-[2px] "
                />
                <div
                    className={`absolute top-0 left-0 flex h-full w-full flex-col justify-center rounded-lg bg-black bg-opacity-40 p-2 text-center text-gray-700 ${
                        activo && "bg-opacity-80"
                    }`}
                >
                    <h2
                        className={`select-none text-2xl ${
                            activo && "text-white"
                        }`}
                    >
                        {titulo}
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Tarjeta
