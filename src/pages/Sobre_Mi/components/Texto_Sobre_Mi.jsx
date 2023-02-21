import Iconos_Front_End from "./Iconos_Front_End"

function Texto_Sobre_Mi() {
    return (
        <div className="space-y-5 px-4 text-left text-lg tracking-wider text-gray-900 dark:text-gray-100">
            <p>
                ¡Encantado de conocerte! 👋. <br></br>
                Soy Esteban, un estudiante autodidacta del mundo del desarrollo
                web. Me dedico a estudiar la creación de sitios y aplicaciones
                web, con objetivos claros de ser un desarrollador web
                full-stack.
            </p>
            <div className="space-y-2 ">
                <p>
                    Tengo habilidades en tecnologías del desarrollo front-end,
                    como{" "}
                    <strong className="dark:text-white">
                        HTML, CSS, JavaScript, React y TailwindCSS{" "}
                    </strong>
                    dando por obvio{" "}
                    <strong className="dark:text-white"> Git y GitHub</strong>.
                </p>
                <Iconos_Front_End />
            </div>
            <p>
                Me interesa aprender tecnologías famosas y que tienen años en el
                mercado, como pueden ser NextJs, Python o también ExpressJs para
                aprender back-end y MongoDB para el lenguaje de consulta de base
                de datos. También quiero aprender metodologías ágiles de
                desarrollo de software y buenas prácticas para escribir código,
                como pueden ser{" "}
                <strong className="dark:text-white"> Scrum</strong> y tomar lo
                mejor del{" "}
                <strong className="dark:text-white"> Clean Code</strong>.
            </p>
            <p>
                También tengo algunos proyectos en mente, como por ejemplo un
                <span className="italic"> e-commerce</span> o una{" "}
                <span className="italic">
                    {" "}
                    aplicación de chat en tiempo real{" "}
                </span>{" "}
                para poner en práctica conocimientos de un desarrollador
                full-stack 😊.
            </p>
        </div>
    )
}

export default Texto_Sobre_Mi
