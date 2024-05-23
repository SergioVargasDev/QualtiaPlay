import { useMemo } from "react";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({
  showRectangleDiv,
  propBorderRadius,
  propBackgroundColor,
  onRectangle3Click,
  onJuegosTextClick,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorderRadius, propBackgroundColor]);

  return (
    <button className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup} style={frameDiv2Style}>
        {showRectangleDiv && (
          <div className={styles.frameItem} onClick={onRectangle3Click} />
        )}
        <div className={styles.juegos} onClick={onJuegosTextClick}>
          Juegos
        </div>
        <img className={styles.icon} alt="" src="/twitter-icon@2x.png" />
      </div>
    </button>
  );
};

export default FrameComponent8;
