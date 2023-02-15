import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/Error-Page"
import Inicio from "../pages/Inicio"
import Sobre_Mi from "../pages/Sobre_Mi/Sobre_Mi"
import Proyectos from "../pages/Seccion_Proyectos/Proyectos"
import Contacto from "../pages/Contacto"
import Estudios from "../pages/Estudios"
import Intro from "../pages/Intro"

const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Intro />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/portafolio",
        element: <App />,
        children: [
            {
                path: "portafolio",
                element: <Inicio />,
            },
            {
                path: "sobremi",
                element: <Sobre_Mi />,
            },
            {
                path: "proyectos",
                element: <Proyectos />,
            },
            {
                path: "contacto",
                element: <Contacto />,
            },
            {
                path: "estudios",
                element: <Estudios />,
            },
        ]
    }
])

function Router() {
    return <RouterProvider router={rutas} />
}

export default Router
