"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <section>
      <Navbar />
      <main className="flex flex-col items-center justify-end lg:justify-between p-7 md:p-10 lg:p-24">
        <div className="max-w-2xl mx-auto flex flex-col gap-y-5">
          <motion.h2
            initial={{
              opacity: 0,
              translateY: 10,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeInOut",
            }}
            className="font-bold text-transparent bg-gradient-to-br from-neutral-400 via-neutral-100 to-white bg-clip-text text-4xl lg:text-[50px] font-average leading-[1.25] text-center text-balance"
          >
            Not having a good landing page can suck
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              translateY: 10,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="text-neutral-400/80 font-semibold text-center text-xl max-w-md mx-auto text-balance font-average leading-[1.5]"
          >
            So get our landing page template and make your conversion rate go
            brrrr
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              translateY: 10,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center gap-x-5 max-w-md mx-auto w-full"
          >
            <button className="w-full px-5 font-mono cursor-pointer font-bold h-10 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 shadow-black/25 ring-1 ring-indigo-500/50 shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.6)] inline-flex items-center justify-center transition-colors duration-100 ease-linear">
              Connect One
            </button>
            <button className="w-full px-5 cursor-pointer font-[520] h-10 rounded-md bg-gradient-to-b bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/50  flex items-center justify-center relative transition-colors ease-linear duration-100 text-white">
              <div className="rounded-md absolute inset-0 shadow border-t border-neutral-500/30" />
              Connect Two
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            translate: "0 4rem",
            transform: "perspective(500px) rotateX(10deg)",
          }}
          animate={{
            opacity: 1,
            translate: 0,
            transform: "perspective(500px) rotateX(2deg)",
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
            easings: "cubic-bezier(.8,0,.2,1)",
          }}
          className="dashboard-img-container relative overflow-hidden rounded-xl md:rounded-2xl max-w-7xl mt-24 mx-auto z-10 shadow-[0_0_6rem_#6040ff60,0_0_2rem_#8585ff40]"
        >
          <motion.div
            initial={{
              opacity: 0,
              translateX: "-40%",
              translateY: "90%",
              rotate: "125deg",
            }}
            animate={{
              opacity: 1,
              translateX: "-30%",
              translateY: "100%",
              rotate: "135deg",
            }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: "easeInOut",
              damping: 30,
              stiffness: 500,
            }}
            className="hidden md:block absolute inset-0 rounded-xl md:rounded-2xl bg-[linear-gradient(transparent,#ffffff08);] w-[150%] h-[20rem] "
          ></motion.div>
          <motion.img
            className="dashboard-image w-full h-full object-cover rounded-xl md:rounded-2xl"
            src="/dashboard-mockup.png"
            alt="Dashboard Mockup"
          ></motion.img>
        </motion.div>
      </main>
      <Footer />
    </section>
  );
}