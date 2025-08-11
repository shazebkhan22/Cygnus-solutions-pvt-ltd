"use client";
import { ContainerScroll } from "./ContainerScroll";
import hpc from "../assets/solutionpics/hpc.mp4";
import { motion } from "framer-motion";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black dark:text-white mb-4"
            >
              <span className="font-bold mt-1 leading-none">
                High Performance Computing
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
               className="text-md sm:text-md md:text-lg text-gray-600 max-w-4xl mx-auto mb-12"
            >
              Cutting-edge clusters and parallel file systems (e.g., Lustre, GPFS) to handle complex workloads like geophysical data processing
            </motion.p>
          </>
        }>
        <video
          src={hpc}
          alt="hero"
          width={1400}
          height={720}
          className="mx-auto rounded-2xl object-cover h-full w-full"
          autoPlay
          muted
          loop
        />
      </ContainerScroll>
    </div>
  );
}