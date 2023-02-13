import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/Error-Page"
import Inicio from "../pages/Inicio"
import SobreMi from "../pages/SobreMi"
import Proyectos from "../pages/Proyectos"
import Contacto from "../pages/Contacto"

const rutas = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Inicio />,
            },
            {
                path: "sobremi",
                element: <SobreMi />,
            },
            {
                path: "proyectos",
                element: <Proyectos />,
            },
            {
                path: "contacto",
                element: <Contacto />,
            },
        ],
    },
])

function Router() {
    return <RouterProvider router={rutas} />
}

export default Router
