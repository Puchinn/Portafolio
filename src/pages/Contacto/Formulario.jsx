import { useForm } from "@formspree/react"
import { useState } from "react"
import Input_nombre from "./components/Input_nombre"
import Input_email from "./components/Input_email"
import Input_textarea from "./components/Input_textarea"
import Notificacion from "./components/Notificacion"

function Formulario() {
    const [state, handleSubmit] = useForm("xjvdwojz")
    const [mostrar, setMostrar] = useState(true)

    return (
        <div className="w-full rounded-2xl border-4 border-[#b0c2f2] py-3 px-4 dark:border-white ">
            <h1 className="text-center text-xl tracking-wide text-gray-700 dark:text-white ">
                Formulario de contacto
            </h1>

            <form
                onSubmit={handleSubmit}
                className="mx-auto mt-2 mb-0 space-y-2"
            >
                <Input_nombre />
                <Input_email />
                <Input_textarea />

                <button
                    disabled={state.submitting}
                    type="submit"
                    className="w-full rounded-lg bg-blue-500 py-2 text-lg text-white hover:bg-blue-400"
                >
                    Enviar
                </button>
            </form>

            {state.succeeded && mostrar && (
                <Notificacion setMostrar={setMostrar} />
            )}
        </div>
    )
}

export default Formulario