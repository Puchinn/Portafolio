function BtnNext({ onClick, idActual, long }) {
    const siguiente = () => {
        onClick(idActual + 1)
        if (idActual + 1 > long) {
            onClick(0)
        }
    }

    return (
        <>
            <button
                type="button"
                className="group inline-block cursor-pointer px-4 focus:outline-none"
                onClick={siguiente}
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </>
    )
}

export default BtnNext
