import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Intro from "../pages/Intro"
import App from "../App"
import Contenedor from "../components/Contenedor"
import Sobre_Mi from "../pages/Sobre_Mi/Sobre_Mi"
import Contacto from "../pages/Contacto/Contacto"
import ContextContainer from "../context/darkTheme"
import Trabajo from "../pages/Trabajo"

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
                        path: "sobremi",
                        element: <Sobre_Mi />,
                    },
                    {
                        path: "trabajo",
                        element: <Trabajo />,
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
