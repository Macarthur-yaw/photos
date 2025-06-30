import Image1 from "../assets/pexels-remove.png"
import { CallMadeSharp as CallMadeSharpIcon } from '@mui/icons-material'
export default function Contact(){
      return (
            <div className="mt-40 bg-yellow-800 h-[60vh] w-full  flex flex-row items-center justify-around">
                 

<div className="text-start flex flex-col gap-2">

<span className="border-1 p-2 w-fit rounded-full border-white">
      <CallMadeSharpIcon className='inline-block text-white cursor-pointer ' fontSize='medium' />
</span>
<span className="text-5xl text-start text-white font-semibold tracking-wide leading-tight">
      Contact us now
      <br/> 
      to learn more
</span> 

<h2 className="text-white text-lg font-medium tracking-wide leading-6">
      about our services and back your session 
</h2>
</div>

<div>
      <img src={Image1} className="h-96" />
</div>
            
            </div>
      ) 
}