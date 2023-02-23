import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Intro from "../pages/Intro"
import App from "../App"
import Contenedor from "../components/Contenedor"
import Sobre_Mi from "../pages/Sobre_Mi/Sobre_Mi"
import Contacto from "../pages/Contacto/Contacto"
import Trabajo from "../pages/Trabajo"

const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Intro />,
    },
    {
        path:"/esteban",
        element:<App />,
        children:[
            {
                path:"/esteban/sobremi",
                element:<Sobre_Mi />
            },
            {
                path:"/esteban/trabajo",
                element:<Trabajo />
            },
            {
                path:"/esteban/contacto",
                element:<Contacto />
            },
            
        ]
    },
])

function Router() {
    return <RouterProvider router={rutas} />
}

export default Router
