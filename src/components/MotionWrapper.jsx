import { motion } from "framer-motion";

const MotionWrapper = ({
    children,
    className,
    delay = 0.5,
    duration = 1,
    y = 70,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay }}
            viewport={{ once: true }}
            className={`${className}`}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
