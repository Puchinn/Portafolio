function Icono({ url, titulo }) {
    return (
        <>
            <div className="group relative flex w-20 flex-col items-center transition-all hover:-translate-y-2 hover:cursor-pointer">
                <span className="absolute -top-9 mb-2 hidden max-w-min rounded-2xl border-2 border-gray-700 bg-gray-500 px-2 text-center text-base text-white group-hover:inline-block">
                    {titulo}
                </span>

                <img src={url} alt={titulo} />
            </div>
        </>
    )
}

export default Icono
