import { motion } from "framer-motion";
import SubsliderText from "./subsliderText";

const Motion = () => {
  return (
    <div className="w-[300px] flex justify-center h-[10vh] absolute">
      <motion.div
        initial={{ x: "-300px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 5 }}
      >
        <SubsliderText
          EnName="LIE-HUNT"
          KoName="라이헌트"
          GameInfo="당신들이겪은...어쩌고저쩌고ㅈㄴ어렵네왜안돼 ㅅㅂ"
          Level="난이도 easy"
          Recommend="추천인원 2~8인"
          RunningTime="게임시간 30분"
        />
      </motion.div>
    </div>
  );
};

export default Motion;
