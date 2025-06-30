import { useNavigate } from "react-router";
import Image1 from "../assets/pexels-remove.png";
import { CallMadeSharp as CallMadeSharpIcon } from "@mui/icons-material";

export default function Contact() {
      const navigate = useNavigate()
  return (
    <div className="mt-40 bg-yellow-800 w-full py-12 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Text Content */}
      <div className="text-start flex flex-col gap-4 max-w-xl">
        <span onClick={()=>navigate("/contact")} className="border  cursor-pointer border-white p-3 w-fit rounded-full">
          <CallMadeSharpIcon className="text-white" fontSize="medium" />
        </span>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide leading-tight text-white">
          Contact us now
          <br />
          to learn more
        </h1>

        <h2 className="text-white text-base md:text-lg font-medium leading-relaxed">
          about our services and book your session today.
        </h2>
      </div>

      {/* Image */}
      <div>
        <img
          src={Image1}
          alt="Contact Visual"
          className="h-72 md:h-96 w-auto object-contain"
        />
      </div>
    </div>
  );
}
