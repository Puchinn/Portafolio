import foto from "../assets/foto-perfil.webp"

function Foto() {
    return (
        <>
            <div className="grid w-1/2 items-center">
                <img
                    className="w-40 rounded-full border-2"
                    src={foto}
                    alt="foto de xiao genshin impact"
                />
            </div>
        </>
    )
}

export default Foto
