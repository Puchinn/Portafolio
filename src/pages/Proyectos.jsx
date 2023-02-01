import { useState } from "react";
import Tarjeta from "../components/Tarjeta";
import Proyecto from "../components/Proyecto";

function Proyectos(){

    const [selected,setSelected] = useState("Genshin Impact");

    const proyectos = [
        {
            src:"https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2022/09/genshin-impact-parche-actualizacion-version-3-1-personajes-sumeru-eventos-armas-anime-gamerfocus.jpg?fit=1920%2C1080&ssl=1",
            titulo:"Genshin Impact",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellendus fugit, hic asperiores eos minus debitis nisi blanditiis quos deserunt."
        },
        {
            src:"https://i.ytimg.com/vi/H2LaRCieieM/maxresdefault.jpg",
            titulo:"Hu Tao",
            desc:"Loremcing e asdas dasdasdasd asd asd asda sdasdasd asdasdasd fugit, hic asperiores eos minus debitis nisi blanditiis quos deserunt."
        }
    ]

    const activo = proyectos.find(elemento => elemento.titulo === selected)

    return (
        <>
            <div className="w-full h-full relative">
                <h1 className="text-6xl absolute top-0">Proyectos</h1>
                <div className="flex w-full h-full ">
                    <div className='w-5/12 flex flex-col justify-center space-y-5 pl-12'>

                        {
                            proyectos.map(elemento =>{
                                return <Tarjeta {...elemento} eActivo={selected} setActivo={setSelected} key={elemento.titulo} />
                            })
                        }

                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <Proyecto {...activo} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyectos