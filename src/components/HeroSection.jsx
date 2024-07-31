import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import Head from 'next/head';
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const HeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    // <motion.section
    //   style={{
    //     backgroundImage,
    //   }}
    //   className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    // >
    //   <div className="relative z-10 flex flex-col items-center">
    //     <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
    //       Beta Now Live!
    //     </span>
    //     <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
    //       Decrease your SaaS churn by over 90%
    //     </h1>
    //     <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
    //       distinctio eum impedit nihil ipsum modi.
    //     </p>
    //     <motion.button
    //       style={{
    //         border,
    //         boxShadow,
    //       }}
    //       whileHover={{
    //         scale: 1.015,
    //       }}
    //       whileTap={{
    //         scale: 0.985,
    //       }}
    //       className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
    //     >
    //       Get in Touch
    //       <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
    //     </motion.button>
    //   </div>

    //   <div className="absolute inset-0 z-0">
    //     <Canvas>
    //       <Stars radius={50} count={2500} factor={4} fade speed={2} />
    //     </Canvas>
    //   </div>
    // </motion.section>
    <div className="bg-slate-950 relative z-11 min-h-screen w-screen max-w-screen">
      <div className="h-[120%] w-2/3 bg-gradient-radial from-[#9757e3] via-transparent to-transparent -top-2/3 -left-20 z-10 absolute"></div>
      <div className="h-full w-full gradient-bg absolute"></div>
      {/* <div className="h-[250%] w-[250%] bg-gradient-radial from-[#9757e3] via-transparent to-transparent -top-[140%] -left-[120%] z-9 absolute"></div> */}
      {/* <div class="bg-gradient-radial from-indigo-500 min-h-screen flex items-center justify-center">
        <div class="text-white text-center p-8">
          <h1 class="text-5xl font-bold">Seamlessly AI Integration for Business</h1>
          <p class="text-xl mt-4">We will help integrate AI models into your application or business process</p>
          <button class="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-md">Get started</button>
        </div>
      </div> */}

    </div>
    // <div className="container w-full">
      

    //   <main className="main">
    //     <div className="bg-grediant-1"></div>
    //     <div className="overlay">
    //       <h1 className="title">
    //         Seamlessly AI Integration for Business
    //       </h1>
    //       <p className="description">
    //         We will help integrate AI models into your application or business process
    //       </p>
    //       <button className="button">Get Started</button>
    //     </div>
    //   </main>
    // </div>
  );
};
export default HeroSection