import bg from "../assets/t2.svg"
function Background() {
    return (
        <>
            <div className="absolute top-0 left-0 -z-10 h-screen w-screen bg-no-repeat bg-cover"  style={{backgroundImage:`url(${bg})`}}></div>
        </>
    )
}

export default Background
