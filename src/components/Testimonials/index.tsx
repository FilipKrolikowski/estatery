import { testimonials } from "@/static/data";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

  const activeStyle =
    "border-b-primary-violet border-r-primary-violet border-t-primary-violet border-b-primary-violet border-l-[#e8edf3]";
  const hoverStyle =
    "hover:border-b-primary-violet hover:border-r-primary-violet hover:border-t-primary-violet hover:border-b-primary-violet hover:border-l-[#e8edf3]";

  return (
    <div className="mt-12 flex justify-center">
      <div className="max-w-[750px]">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} key={selectedTestimonial.name}>
          <div className="text-medium text-xl text-center leading-[160%]">{selectedTestimonial.text}</div>
          <div className="mt-8 text-center">
            <span className="font-bold">{selectedTestimonial.name}, </span>
            <span className="text-[#707686]">Renter</span>
          </div>
        </motion.div>
        <div className="flex justify-center gap-8 mt-8">
          {testimonials.map((t) => (
            <div
              onClick={() => setSelectedTestimonial(t)}
              key={t.name}
              className="rounded-full p-0.5 relative cursor-pointer"
            >
              <div
                className={`absolute -inset-1 border-3 rounded-full rotate-45 ${hoverStyle} ${
                  selectedTestimonial.name === t.name ? activeStyle : "border-transparent"
                }`}
              ></div>
              <div className="rounded-full w-fit overflow-hidden">
                <Image src={t.avatar} alt={t.name} width={60} height={60} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
