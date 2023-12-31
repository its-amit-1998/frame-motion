import { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',
        transition: {
            staggerChildren: 0.5,
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            staggerChildren: 0.4,
            when: "beforeChildren",
        }
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

interface OrderProps {
    pizza: any;
    setShowModal: (value: boolean) => void;
}


const Order = ({ pizza, setShowModal }: OrderProps) => {
    // useEffect lifecycle hook, array with only setShowModal as dep 
    useEffect(() => {
        setTimeout(() => setShowModal(true), 5000);
    }, [setShowModal]);

    return (
        <motion.div className="container order"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h2>Thank you for your order :)</h2>
            <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
            <motion.div variants={childVariants}>
                {pizza.toppings.map((topping: any) => <div key={topping} >{topping}</div>)}
            </motion.div>
        </motion.div>
    )
}

export default Order
