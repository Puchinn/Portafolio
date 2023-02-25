import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import SobreMi from "../pages/Sobre_Mi/SobreMi"
import Contacto from "../pages/Contacto/Contacto"
import Portafolio from "../pages/Portafolio"
import Inicio from "../pages/Inicio"

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

function Router() {
    return <RouterProvider router={rutas} />
}

export default Router
