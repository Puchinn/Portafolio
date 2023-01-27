function Menu(){
    return(
        <>
            <nav className="inline-flex gap-x-3 flex-col [&_label_div]:transition-all [&_label_div]:cursor-pointer [&_label]:inline-block ">
                <label htmlFor="home">
                    <input type="radio" name="menu" id="home" className="peer" hidden defaultChecked/>
                    <div className="inline-block py-16 px-5 bg-white opacity-30 peer-checked:px-7 peer-checked:opacity-50 rounded-r-lg"></div>
                </label>
                <label htmlFor="proyectos">
                    <input type="radio" name="menu" id="proyectos" className="peer" hidden/>
                    <div className="inline-block py-16 px-5 bg-white opacity-30 peer-checked:px-7 peer-checked:opacity-50 rounded-r-lg"></div>
                </label>
                <label htmlFor="sobremi">
                    <input type="radio" name="menu" id="sobremi" className="peer" hidden />
                    <div className="inline-block py-16 px-5 bg-white opacity-30 peer-checked:px-7 peer-checked:opacity-50 rounded-r-lg"></div>
                </label>
            </nav>
        </>
    )
}

export default Menu