import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Intro from "../pages/Intro"
import App from "../App"
import Contenedor from "../components/Contenedor"
import Sobre_Mi from "../pages/Sobre_Mi/Sobre_Mi"
import Proyectos from "../pages/Seccion_Proyectos/Proyectos"
import Contacto from "../pages/Contacto"
import Inicio from "../pages/Inicio"
import ContextContainer from "../context/darkTheme"

const rutas = createBrowserRouter([
    {
        path: "/",
        element: (
            <ContextContainer>
                <App />
            </ContextContainer>
        ),
        children: [
            {
                path: "/",
                element: <Intro />,
            },
            {
                path: "portafolio",
                element: <Contenedor />,
                children: [
                    {
                        path: "inicio",
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
                ],
            },
        ],
    },
])

function Router() {
    return <RouterProvider router={rutas} />
}

export default Router
