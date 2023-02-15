import bg from "../assets/t2.svg"
function Background() {
    return (
        <>
            <div className="absolute top-0 left-0 -z-10 h-screen w-screen bg-no-repeat bg-cover"  style={{backgroundImage:`url(${bg})`}}></div>
            <div className="absolute h-screen w-screen -z-10 bg-black top-0 bg-opacity-40 hidden dark:block"></div>
        </>
    )
}

export default Background
