import { useMemo } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent11 = ({ propPadding, onRectangleClick }) => {
  const frameButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.azulParent}>
      <img className={styles.azulIcon} alt="" src="/azul.svg" />
      <button className={styles.rectangleParent} style={frameButtonStyle}>
        <div className={styles.frameChild} onClick={onRectangleClick} />
        <img
          className={styles.pngtreeChatbotLineIconVect}
          alt=""
          src="/pngtreechatbotlineiconvectorpngimage-6684317-1@2x.png"
        />
        <div className={styles.chatbotContainer}>
          <div className={styles.chatBot}>Chat-bot</div>
        </div>
      </button>
    </div>
  );
};

export default FrameComponent11;
