import { useMemo } from "react";
import styles from "./Mision.module.css";
import token from  "../img/Token.png"


const Mision = ({
  prop,
  perseverante,
  seConsigueAlGirarLaRuleta,
  propAlignSelf,
  propWidth,
  propGap,
}) => {
  const mision2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const frameDiv3Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={styles.mision2} style={mision2Style}>
      <div className={styles.mision2Child} />
      <div className={styles.mision2Item} />
      <div className={styles.rectangleParent}>
        <img src={token} className={styles.tokenImage}/>
        <div className={styles.wrapper}>
          <div className={styles.div}>{prop}</div>
        </div>
      </div>
      <div className={styles.mision2Inner}>
        <div className={styles.frameParent} style={frameDiv3Style}>
          <div className={styles.frameGroup}>
            <div className={styles.perseveranteWrapper}>
              <div className={styles.perseverante}>{perseverante}</div>
            </div>
            <div className={styles.seConsigueAl}>
              {seConsigueAlGirarLaRuleta}
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameChild1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mision;
