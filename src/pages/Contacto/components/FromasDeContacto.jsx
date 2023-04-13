function FormasDeContacto() {
  return (
    <div className="mx-auto space-y-5 pt-10 pb-4">
      <div className="flex items-center space-x-4">
        <svg
          className="w-16 xl:w-24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Gmail"
          role="img"
          viewBox="0 0 512 512"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <rect
              width="512"
              height="512"
              rx="15%"
              fill="#ffffff"
            ></rect>
            <path fill="#f2f2f2" d="M120 392V151.075h272V392"></path>
            <path
              fillOpacity=".05"
              d="M256 285L120 392l-4-212"
            ></path>
            <path
              fill="#d54c3f"
              d="M120 392H97c-12 0-22-10-22-23V143h45z"
            ></path>
            <path fillOpacity=".08" d="M317 392h77V159H82"></path>
            <path fill="#f2f2f2" d="M97 121h318L256 234"></path>
            <path
              fill="#b63524"
              d="M392 392h23c12 0 22-10 22-23V143h-45z"
            ></path>
            <path
              fill="none"
              stroke="#de5145"
              strokeLinecap="round"
              strokeWidth="44"
              d="M97 143l159 115 159-115"
            ></path>
          </g>
        </svg>
        <div>
          <h1 className="text-lg">Correo Electronico</h1>
          <p className="font-semibold">
            estebansayago@itdeveloper.ar
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <svg
          className="w-16 xl:w-24"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              cx="512"
              cy="512"
              r="512"
              style={{ fill: "#5865f2" }}
            ></circle>{" "}
            <path
              d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z"
              style={{ fill: "#fff" }}
            ></path>{" "}
          </g>
        </svg>
        <div>
          <h1 className="text-lg">Discord</h1>
          <a
            className="font-semibold underline"
            href="https://discordapp.com/users/392773520838492160"
            target="_blank"
          >
            Hablar en Discord
          </a>
        </div>
      </div>
    </div>
  )
}

export default FormasDeContacto
