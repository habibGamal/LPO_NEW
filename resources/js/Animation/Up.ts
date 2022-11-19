
const animationProps = {
    initial: { y: 150, opacity: 0 },
    transition: { duration: 1, type: 'spring' },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
}

export {animationProps as animateUp};
