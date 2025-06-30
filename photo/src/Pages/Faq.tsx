import { useState } from "react";
import { Faq } from "../Constant/Faq";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import * as motion from "motion/react-client"
export default function FaqShow() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <header className="text-center mt-10">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-4">
          Here are some common questions and answers to help you.
        </p>
      </header>

      <div className="grid grid-cols-1 md:w-[40%] mx-auto gap-4 p-4 mt-10">
        {Faq.map((faq, index) => (
          <div key={faq.id} className="border border-gray-300 rounded-lg">
            <div
              onClick={() => toggleFaq(index)}
              className="p-4 flex items-center justify-between cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <AddOutlinedIcon
                fontSize="small"
                className="transition-transform duration-300"
                style={{
                  transform: activeIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                }}
              />
            </div>

            {activeIndex === index && (
              <motion.div
              initial ={{opacity:0, y:-10}}
              animate={{opacity:1, y: 0}}
              transition={{duration:0.3}}
              className="p-4 pt-0 text-gray-700">
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
