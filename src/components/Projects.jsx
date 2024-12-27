import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 " id="projects">
        <motion.h2 
         whileInView={{ opacity:1, y:0 }}
         initial={{ opacity:0, y: -100 }}
         transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Projects</motion.h2>
        <div>
          {PROJECTS.map((PROJECTS, index) => (
            <div key={index} className=" relative mb-8 flex flex-wrap lg:justify-start items-center">
              <motion.div 
              whileInView={{ opacity:1, x:0 }}
              initial={{ opacity:0, x: -100 }}
              transition={{ duration: 1 }}
              className=" relative w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-16 mx-4 md:mx-10 lg:mx-28 group">
              
             <div className="relative w-full lg:w-3/4 rounded-lg overflow-hidden"> 
             <img 
              src={PROJECTS.image}
              widht={150}
              height={150}
              alt={PROJECTS.title}
              className="w-full h-auto rounded-lg group-hover:opacity-20 transition-opacity duration-300"
              />
               
               <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 rounded-lg">
                <a
                  href={PROJECTS.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-all"
                >
                  Live
                </a>
                <a
                  href={PROJECTS.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900 transition-all"
                >
                  GitHub
                </a>
                </div>
              </div>

              </motion.div>

              <motion.div 
              whileInView={{ opacity:1, x:0 }}
              initial={{ opacity:0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 text-left lg:ml-auto">
                <h6 className="mb-2 font-semibold">{PROJECTS.title}</h6>
                <p className="mb-4 text-neutral-400">{PROJECTS.description}</p>
                {PROJECTS.technologies.map((tech, index) =>(
                  <span
                   key={index}
                   className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              </div>
          ))}
        </div>
        </div>
  )
}

export default Projects