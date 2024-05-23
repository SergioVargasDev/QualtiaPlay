import { useMemo } from "react";
import styles from "./FrameComponent10.module.css";

const FrameComponent10 = ({
  showRectangleDiv,
  propBorderRadius,
  propBackgroundColor,
  propBackgroundColor1,
  onRectangle2Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorderRadius, propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <button className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup} style={frameDivStyle}>
        {showRectangleDiv && (
          <div
            className={styles.frameItem}
            onClick={onRectangle2Click}
            style={rectangleDivStyle}
          />
        )}
        <div className={styles.tienda}>tienda</div>
        <img className={styles.icon} alt="" src="/game-area@2x.png" />
      </div>
    </button>
  );
};

export default FrameComponent10;
