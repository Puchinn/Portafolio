function BtnBack({ onClick, idActual, long }) {
    const volver = () => {
        onClick(idActual - 1)
        if (idActual - 1 < 0) {
            onClick(long)
        }
    }

    return (
        <>
            <button
                type="button"
                className="group flex cursor-pointer px-4 focus:outline-none"
                data-carousel-prev
                onClick={volver}
            >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                    <svg
                        aria-hidden="true"
                        className="h-6 w-6 text-white dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        ></path>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
        </>
    )
}

export default BtnBack
