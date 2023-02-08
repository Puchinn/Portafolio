import TechsFront from "./TechsFront"
import TechsOtras from "./TechsOtras"

function Teconologias() {
    return (
        <>
            <div className="space-y-2">
                <h1 className="text-lg tracking-wider text-gray-900">
                    Tecnologias con las que trabajo:
                </h1>
                <div className="flex justify-around">
                    <TechsFront />
                    <TechsOtras />
                </div>
            </div>
        </>
    )
}

export default Teconologias
