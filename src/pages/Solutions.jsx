"use client";

import React from "react";
import Infrastructure from "../sections/SolutionsSection/Infrastructure";
import CyberSecurity from "../sections/SolutionsSection/CyberSecurity";
import Storage from "../sections/SolutionsSection/Storage";
import Network from "../sections/SolutionsSection/Network";
import EndPointSolutions from "../sections/SolutionsSection/EndPointSolutions";
// import AudioVideoScreens from "../sections/SolutionsSection/AudioVideoScreens";
// import PrintSolutions from "../sections/SolutionsSection/PrintSolutions";
import PrintSolutions2 from "../sections/SolutionsSection/PrintSolutions2";
// import HighPerformanceComputing from "../sections/SolutionsSection/HighPerformanceComputing";
import CloudSolutions from "../sections/SolutionsSection/CloudSolutions";
import AIML from "../sections/SolutionsSection/AIML";
import AppleScroll from "../components/AppleScroll";
import GetInTouch from "../sections/SolutionsSection/GetInTouch";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "../components/GoogleGeminEffect";

export default function Solutions() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <>
      <div
        className="h-[200vh] bg-white w-full dark:border dark:border-white/[0.1] relative pt-40 overflow-clip bg-gradient-to-t from-white to-blue-100 "
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>

      {/* All Solutions Sections */}
      <Infrastructure />
      <CyberSecurity />
      <Storage />
      <Network />
      <EndPointSolutions />
      {/* <AudioVideoScreens /> */}
      {/* <PrintSolutions /> */}
      <PrintSolutions2/>
      <AppleScroll/>
      {/* <HighPerformanceComputing /> */}
      <CloudSolutions />
      <AIML />
      <GetInTouch />
    </>
  );
}
