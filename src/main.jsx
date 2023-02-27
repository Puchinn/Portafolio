import React from "react"
import ReactDOM from "react-dom/client"
import "./main.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import SobreMi from "./pages/Sobre_Mi/SobreMi"
import Contacto from "./pages/Contacto/Contacto"
import Portafolio from "./pages/Portafolio"
import Inicio from "./pages/Inicio"

const rutas = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Inicio />,
            },
            {
                path: "/sobremi",
                element: <SobreMi />,
            },
            {
                path: "/portafolio",
                element: <Portafolio />,
            },
            {
                path: "/contacto",
                element: <Contacto />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={rutas} />
    </React.StrictMode>
)
