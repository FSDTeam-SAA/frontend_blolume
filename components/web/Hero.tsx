"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  vedieoLink: string;
  title: string;
  description?: string;
  btnText?: string;
}

export default function Hero({
  vedieoLink,
  title,
  description,
  btnText,
}: Props) {
  return (
    <section className="relative h-[724px] bg-slate-900 text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={vedieoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center  h-screen lg:h-[724px]">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] text-center md:text-[50px] lg:text-[72px] text-[#FFFFFF] font-bold leading-[120%] w-auto lg:w-[1000px] mx-auto"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-[24px] text-center text-[#E6E6E6] mb-8 mt-4 w-auto lg:w-[1100px] mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {btnText && (
              <Button
                size="lg"
                className="border bg-transparent hover:bg-transparent border-[white] text-base font-normal px-[32px] h-[51px] relative group"
              >
                <span className="relative z-10">{btnText}</span>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
