import { AnimatePresence, animate, motion } from "framer-motion"


export function TransitionPage() {
    return (
        <AnimatePresence>
            <motion.div 
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-secondary"
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{delay:0.1, duration: 0.3, ease: "easeInOut"}}
            >
            </motion.div>

            <motion.div 
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-secondary/70 opacity-50"
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}}
            >
            </motion.div>
        </AnimatePresence>
    )
}

const transitionVariantsPage = {
    initial: {
        x: "100%",
        with: "100%"
    },
    animate: {
        x: "0%",
        with: "0%"
    },
    exit: {
        x: ["0%", "100%"],
        with: ["0%", "100%"]
    }
}