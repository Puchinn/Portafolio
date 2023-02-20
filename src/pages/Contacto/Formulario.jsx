function Formulario() {
    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-xl">
                        Formulario de contacto
                    </h1>
                </div>

                <form action="" className="mx-auto mt-4 mb-0 max-w-md space-y-4">
                    <div>
                        <label for="email" className="sr-only">
                            Email
                        </label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-md border-gray-200 p-4 text-sm shadow-sm"
                                placeholder="Nombre"
                            />

                        </div>
                    </div>

                    <div>
                        <label for="password" className="sr-only">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario
