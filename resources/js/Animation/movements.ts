export const up = (delay: number = 0) => {
    return {
        initial: { opacity: 0, y: 100 },
        transition: { duration: 2, delay, ease: "backOut"  },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
    };
};
