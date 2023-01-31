import { useRouteError } from 'react-router-dom'

function ErrorPage(){

    const error = useRouteError()

    return (
        <>
            <h1 className='text-center'> NO SE ENCONTRO LA PAGINA LOQUITA :P</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    )
}

export default ErrorPage