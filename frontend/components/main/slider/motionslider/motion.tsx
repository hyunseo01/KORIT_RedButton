import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SubsliderText from "./subsliderText";
import { MotionProps } from "@/types/motionType/motionType";

const Motion = ({
  EnName,
  GameInfo,
  KoName,
  Level,
  RunningTime,
  People,
}: MotionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className="w-[300px] flex justify-center h-[10vh] absolute">
      <motion.div
        initial={{
          x: isMobile ? 0 : "-300px",
          y: isMobile ? "100px" : 0,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 5 }}
      >
        <SubsliderText
          EnName={EnName}
          KoName={KoName}
          GameInfo={GameInfo}
          Level={Level}
          Recommend={People}
          RunningTime={RunningTime}
        />
      </motion.div>
    </div>
  );
};

export default Motion;
