import { motion } from "framer-motion"

function Animacion_paginas({ children }) {
    return (
        <motion.div
        className="w-full"
            initial={{ translateY: "200%" }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.6, ease: "backInOut" }}
        >
            {children}
        </motion.div>
    )
}

export default Animacion_paginas
