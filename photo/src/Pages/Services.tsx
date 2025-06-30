
import { Services } from "../Constant/Services"
import * as motion from "motion/react-client"
export default function Service(){

      return (
            <motion.div 
            
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            className="p-6">
                  <span>
                        <h1 className="text-4xl font-bold text-center mt-10">Our Services</h1>
                        <p className="text-center mt-4 text-gray-600">We offer a wide range of photography services to meet your needs.</p>
                  </span>


<div className="grid grid-cols-4 gap-6  mt-4 ">
                  {
                        Services.map((service, index) => (
                              <div key={index} className="max-w-2xl cursor-pointer border-1 border-stone-700 flex flex-col-reverse gap-2 mx-auto my-8 p-1  rounded-lg">
                                    <h2 className="text-lg font-semibold mb-4">{service.title}</h2>
                                    
                                    <img src={service.image} alt={service.title} className="w-96 rounded-sm h-64 object-cover " />
                              </div>
                        ))
                  }

                  </div>
            </motion.div>
      )
}