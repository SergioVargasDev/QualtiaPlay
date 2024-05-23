import { useMemo } from "react";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = ({
  rectangleDiv,
  propBorderRadius,
  propBackgroundColor,
  propBackgroundColor1,
  onRectangle2Click,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorderRadius, propBackgroundColor]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup} style={frameDiv1Style}>
        {!rectangleDiv && (
          <div
            className={styles.frameItem}
            style={rectangleDiv1Style}
            onClick={onRectangle2Click}
          />
        )}
        <div className={styles.misiones}>Misiones</div>
        <img
          className={styles.currentLocationLogoWorldMaIcon}
          loading="lazy"
          alt=""
          src="/currentlocationlogoworldmaplocationlogosignmapgraphicfreepng-1@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent9;
