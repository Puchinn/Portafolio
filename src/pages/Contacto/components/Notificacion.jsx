function Notificacion({ setMostrar }) {
    return (
        <div className="bottom-0 p-4">
            <div className="absolute left-0 right-0 bottom-4 flex items-center justify-between gap-4 rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
                <p className="text-sm font-medium">
                    Mensaje enviado correctamente!
                </p>

                <button
                    onClick={async () => {
                        setMostrar(false)
                        setTimeout(() => {
                            window.location.reload()
                        }, 500)
                    }}
                    className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Notificacion
