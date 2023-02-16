import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

function Intro() {
    return (
        <motion.div exit={{ opacity: 0, x: -300 }}>
            <div className="fondo_animado_claro grid h-screen w-full animate-backanimado items-center text-center">
                <div className="animate-text-focus-in">
                    <p className="font-serif text-xl tracking-wider text-slate-500 ">
                        Esteban Sayago
                    </p>
                    <h1 className="text-7xl text-white">Desarrollador Web</h1>
                    <h1 className="text-6xl text-rose-600">Front-End</h1>
                    <Link
                        to="portafolio/portafolio"
                        className="group relative mt-5 inline-block animate-wobble-hor-bottom text-sm font-medium text-white focus:outline-none focus:ring"
                    >
                        <span className="absolute inset-0 border border-rose-600 group-active:border-rose-500"></span>
                        <span className="block animate-tracking-in-contract border border-rose-600 bg-rose-600 px-12 py-3 transition-transform active:border-rose-500 active:bg-rose-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Ver Portafolio
                        </span>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Intro
