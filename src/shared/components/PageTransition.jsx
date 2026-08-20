import {motion as Motion} from "framer-motion";

export default function PageTransition({children}) {
    return (
        <Motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}>
            {children}
        </Motion.div>
    )
}