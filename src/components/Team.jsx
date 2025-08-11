"use client";

import {
    animate,
    motion,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { useRef } from "react";

export default function Team() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    const maskImage = useScrollOverflowMask(scrollXProgress);

    const teamHeads = [
        {
            id: 1,
            name: "John Doe",
            designation: "CEO",
            description: "Leading the company with a vision for innovation.",
            image: "https://via.placeholder.com/200", // Replace with actual image URL
        },
        {
            id: 2,
            name: "Jane Smith",
            designation: "CTO",
            description: "Driving technology and innovation.",
            image: "https://via.placeholder.com/200", // Replace with actual image URL
        },
        {
            id: 3,
            name: "Alice Johnson",
            designation: "CFO",
            description: "Ensuring financial stability and growth.",
            image: "https://via.placeholder.com/200", // Replace with actual image URL
        },
        {
            id: 4,
            name: "Bob Brown",
            designation: "COO",
            description: "Overseeing operations and ensuring efficiency.",
            image: "https://via.placeholder.com/200", // Replace with actual image URL
        },
    ];

    return (
        <div id="example">
            <motion.ul ref={ref} style={{ maskImage }}>
                {teamHeads.map((head) => (
                    <motion.li
                        key={head.id}
                        style={{
                            background: `url(${head.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "10px",
                            padding: "200px",
                            color: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            height: "300px",
                        }}
                    >
                        <div
                            style={{
                                background: "rgba(0, 0, 0, 0.6)",
                                padding: "10px",
                                borderRadius: "5px",
                                width: "200px",
                                height: "300px",
                            }}
                        >
                            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                                {head.name}
                            </h3>
                            <p style={{ fontSize: "14px", fontStyle: "italic" }}>
                                {head.designation}
                            </p>
                            <p style={{ fontSize: "12px" }}>{head.description}</p>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
            <StyleSheet />
        </div>
    );
}

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;
function useScrollOverflowMask(scrollXProgress) {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    );

    useMotionValueEvent(scrollXProgress, "change", (value) => {
        if (value === 0) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            );
        } else if (value === 1) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            );
        } else if (
            scrollXProgress.getPrevious() === 0 ||
            scrollXProgress.getPrevious() === 1
        ) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            );
        }
    });

    return maskImage;
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
            #example {
              width: 100vw;
              max-width: 1000px;
              position: relative;
            }

            #example #progress {
                position: absolute;
                top: -65px;
                left: -15px;
                transform: rotate(-90deg);
            }

            #example .bg {
                stroke: #0b1011;
            }

            #example #progress circle {
                stroke-dashoffset: 0;
                stroke-width: 10%;
                fill: none;
            }

            #progress .indicator {
                stroke: var(--accent);
            }

            #example ul {
                display: flex;
                list-style: none;
                height: 220px;
                overflow-x: scroll;
                padding: 20px 0;
                flex: 0 0 600px;
                margin: 0 auto;
                gap: 20px;
            }

            #example ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #fff3;
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-thumb {
                background: var(--accent);
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-corner {
                background: #fff3;
            }

            #example li {
                flex: 0 0 200px;
                background: var(--accent);
            }

    `}</style>
    );
}