import Image1 from '../assets/see.jpg'
import * as motion from "motion/react-client"
export default function About() {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView ={{opacity:1}}
    transition={{duration:0.6, delay:0.1}}
    className="flex flex-col items-center justify-center mt-[100vh] min-h-screen  p-8">
      <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0, opacity:1}}
      transition={{duration:1.5}}
      className="flex flex-row items-start justify-between w-full mb-8">
      <p className="text-2xl font-medium tracking-wide text-stone-900  text-start max-w-2xl">
        WE BELIEVE THAT PHOTOGRAPHY IS AN ART 
        <br/>
        FROM THAT REQUIRES BOTH 
        <br/>
        TECHNICAL SKILL AND CREATIVITY
      </p>

     <span className="relative w-1/2    ">
      <p className="absolute border-b-2 top-3 border-stone-900 w-[70%] right-30  mb-4">

      </p>
      <p className="absolute right-0">
            About Pixlens
      </p>
      </span>
      </motion.div>

      <motion.div
      initial={{x:200, opacity:0}} whileInView={{x:0, opacity:1}}
      transition={{duration:1.5}}
      className="flex flex-row items-end justify-between w-full gap-8">
            <p className="text-md font-medium tracking-wide text-stone-900 text-start max-w-2xl">
            At Pixlens, we are passionate about capturing the beauty of the world through our lens. 
            Our team of skilled photographers is dedicated to providing you with stunning images that tell a story and evoke emotions. 
            Whether it's a wedding, a family portrait, or a breathtaking landscape, we strive to create photographs that you will cherish for a lifetime.
            </p>


            <img src={Image1}
                 alt="Photography Example"
                  className='w-96 h-96 object-cover rounded-sm shadow-lg ml-8'
            />
      </motion.div>
    </motion.div>
  );
}