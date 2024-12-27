import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/AnshProfile.png"
import { motion } from "framer-motion";


const container = (delay) =>({
  hidden: { x: -100, opacity:0 },
  visible:{
    x:0,
    opacity:1,
    transition: { duration:0.5, delay: delay}
  } ,
});



const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 pl-8 lg:pl-16 lg:-mt-12">
        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left">
          <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
            Ansh Tripathi
            </motion.h1> 
            <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:text-4xl">
               Web Developer
            </motion.span>
            <motion.p 
             variants={container(1)}
             initial="hidden"
             animate="visible"
            className="my-4 max-w-xl py-6 text-lg lg:text-xl leading-relaxed">
                {HERO_CONTENT}
                </motion.p>
                <div className="flex justify-center lg:justify-start gap-6 mt-8">
              <button
                className="px-6 py-3 border-2 border-transparent rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                onClick={() => window.open("CV.pdf")}
              >
                Download CV
              </button>
              <button
                className="px-6 py-3 border-2 border-transparent rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                onClick={() => window.open("mailto:anshtrip99@gmail.com")}
              >
                Hire Me
              </button>
            </div>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <div className="flex justify-center">
            <motion.img 
            initial={{ x:100, opacity:0 }}
            animate={{ x:0, opacity:1 }}
            transition={{ duration:1, delay:1.2 }}
            src={profilePic} alt="Ansh" className="w-72 lg:w-96 h-auto object-contain" />
            </div>                     
        </div>
    </div>
  </div>
  )
}

export default Hero