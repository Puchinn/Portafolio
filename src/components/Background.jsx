import bg from "../assets/oo.svg"
function Background() {
    return (
        <>
            <div className="absolute top-0 left-0  bg-no-repeat  bg-cover bg-center -z-10 h-screen w-screen" style={{backgroundImage:`url(${bg})`}}></div>
        </>
    )
}

export default Background
