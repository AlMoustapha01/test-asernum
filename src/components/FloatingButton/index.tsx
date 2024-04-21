import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import './styles.scss';

interface Props {
  children: ReactNode;
}
const FloatButton: React.FC<Props> = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <>
      <motion.button
        className="float-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onClick={toggleContent}
      >
        +
      </motion.button>
      {isContentVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="float-btn-contain"
        >
          {/* Content goes here */}
          {props.children}
        </motion.div>
      )}
    </>
  );
};

export default FloatButton;
