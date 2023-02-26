function BotonMenu({ isActive, setIsActive }) {
    return (
        <button
            onClick={() => setIsActive(!isActive)}
            className="block rounded bg-gray-100 p-2.5 text-gray-800 hover:text-gray-600/75 dark:bg-zinc-800 dark:text-white dark:hover:text-white/75 md:hidden"
        >
            <span className="sr-only">Toggle menu</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    )
}

export default BotonMenu
