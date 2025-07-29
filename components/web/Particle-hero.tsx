"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import Link from "next/link";

interface Props {
  title: string;
  description?: string;
  btnText?: string;
}

export default function ParticleHero({ title, description, btnText }: Props) {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: { value: "#00ffff" }, // Changed particle color to aqua
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.4,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#00ffff", // Changed line color to aqua
              opacity: 0.6,
              width: 0.7,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative h-screen lg:h-[724px] bg-slate-900 text-white overflow-hidden">
      {/* Particles.js Background */}
      <div
        id="particles-js"
        ref={particlesRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundColor: "#1e293b",
          backgroundImage: 'url("")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      />

      {/* Overlay (non-blocking) */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[.5px] z-[1] pointer-events-none" />

      {/* Content (non-blocking) */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center h-screen lg:h-[724px] pointer-events-none">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[30px] text-center md:text-[50px] lg:text-[72px] text-[#FFFFFF] font-bold leading-[120%] w-auto lg:w-[1000px] mx-auto"
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
            className="flex justify-center mt-6 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {btnText && (
              <Link href={"/about"}>
                <Button
                  size="lg"
                  className="border bg-transparent hover:bg-transparent border-[white] text-base font-normal px-[32px] h-[51px] relative group"
                >
                  <span className="relative z-10">{btnText}</span>
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    particlesJS: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pJSDom: any;
  }
}
