"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Section({ children }: any) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, x: "-200px" },
        visible: { opacity: 1, x: "0" },
    };

    return (
        <section ref={ref}>
            <motion.span
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{
                    duration: 0.7,
                    ease: [0.17, 0.55, 0.55, 1],
                    delay: 0.5,
                }}
            >
                {children}
            </motion.span>
        </section>
    );
}
