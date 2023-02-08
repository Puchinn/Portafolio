import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/Error-Page"
import Inicio from "../pages/Inicio"
import SobreMi from "../pages/SobreMi"

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
                path: "contacto",
                element: <h1>:p</h1>,
            },
        ],
    },
])

function Router() {
    return <RouterProvider router={rutas} />
}

export default Router
