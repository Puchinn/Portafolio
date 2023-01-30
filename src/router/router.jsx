import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/Error-Page'
import App from '../App'
import Principal from "../pages/Principal"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Principal />
            },
            {
                path:"proyectos",
                element:<h1>Hola putas</h1>
            },
            {
                path:"contacto",
                element: <h1>:p</h1>
            }
        ]
    },
])

export default router
