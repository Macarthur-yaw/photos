import Image1 from '../assets/pexels.jpg'
import CallMadeSharpIcon from '@mui/icons-material/CallMadeSharp';
import * as motion from "motion/react-client"
export default function Home() {
  return (
    <div className="flex flex-col items-center  justify-center">
      <img
            src={Image1}
            alt="Photography Background"
            className="w-full h-screen object-cover absolute top-0 left-0 z-0 brightness-50"
      />

      <motion.span
      initial={{opacity:0, x:-200}}
      whileInView={{opacity: 1, x:0}}
      
      className='absolute top-1/3 left-10 flex flex-row items-end '>
            <h1 className='text-5xl text-start text-white font-semibold tracking-widest leading-tight'>
                  Capture Life's <br/>
                  Moments with <br/>
                  FlitsPixels    
                    <span className='pl-2  rounded-full  cursor-pointer transition duration-300'>
                      <CallMadeSharpIcon className='text-white   ' fontSize='large'/>
                      </span>
            </h1>
          
           
                  
      </motion.span>


      <motion.span
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.4, delay: 0.3}}
      className='absolute top-2/3 right-10 flex flex-col items-start justify-center'>
            <p className='text-lg text-start text-white font-medium tracking-wide leading-6'>
                  Explore the world through our lens. <br/>
                  Discover stunning photography that tells a story.
            </p>

            <button className='bg-yellow-800 shadow-md text-white cursor-pointer inline-flex px-4 py-2 rounded-md mt-4  transition duration-300 font-semibold tracking-wide'>
                  BOOK A SESSION NOW <CallMadeSharpIcon className='inline-block ' fontSize='small' />
            </button>
      </motion.span>
    </div>
  );
}