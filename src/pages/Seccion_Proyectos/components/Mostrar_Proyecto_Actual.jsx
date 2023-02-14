function Mostrar_Proyecto_Actual({ src, titulo, desc, links }) {
    return (
        <section className={`relative w-full`}>
            <img
                className="absolute inset-0 h-full w-full object-cover"
                src={src}
                alt={titulo}
            />
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
            <div className="relative px-4 py-16 sm:px-6 lg:flex  lg:items-center lg:px-8">
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold text-rose-700 sm:text-5xl">
                        {titulo}
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        {desc}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href={links.demo}
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Go demo
                        </a>

                        <a
                            href={links.github}
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            See code
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mostrar_Proyecto_Actual
