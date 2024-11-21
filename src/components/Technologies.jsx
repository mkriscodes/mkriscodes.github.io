import { RiHtml5Line } from "react-icons/ri"
import { RiCss3Line } from "react-icons/ri"
import { RiReactjsLine } from "react-icons/ri"
import { RiJavascriptLine } from "react-icons/ri"
import { FaPython } from "react-icons/fa6";
import { RiJavaLine } from "react-icons/ri";
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-netural-800 pb-24">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiHtml5Line className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiCss3Line className="text-7xl text-sky-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavaLine className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(1.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptLine className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div 
        variants={iconVariants(1.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies