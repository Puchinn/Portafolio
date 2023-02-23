import gmail from "../../../assets/gmail.svg"
import whatssapp from "../../../assets/whatssapp.svg"

function FormasDeContacto() {
    return (
        <div className="mx-auto space-y-5 pt-10 pb-4">
            <div className="flex items-center space-x-4">
                <img className="w-16 xl:w-24" src={gmail} alt="gmail svg" />
                <div>
                    <h1 className="text-lg">Correo Electronico</h1>
                    <p>sayagoo823@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <img
                    className="w-16 xl:w-24"
                    src={whatssapp}
                    alt="whatssapp svg"
                />
                <div>
                    <h1 className="text-lg">WhatssApp</h1>
                    <p>+54 3572 616936</p>
                </div>
            </div>
        </div>
    )
}

export default FormasDeContacto
