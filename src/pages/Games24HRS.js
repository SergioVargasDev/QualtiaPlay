import { useCallback } from "react";
import NavBar from "../components/NavBar";
import Medio from "../components/Medio";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent from "../components/FrameComponent";
import ScreenshotHolder from "../components/ScreenshotHolder";
import styles from "./Games24HRS.module.css";

const Games24HRS = () => {
  return (
    <div className={styles.games24hrs}>
      <section className={styles.gameHRSContainer}>
      <NavBar />
      <Medio />   
      </section>
      <div className={styles.games24hrsChild} />
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <FrameComponent2 rectangle30="/rectangle-301@2x.png" />
        <div className={styles.frameParent}>
          <FrameComponent5 />
          <FrameComponent />
        </div>
        <ScreenshotHolder rectangle38="/rectangle-381.svg" />
      </section>
    </div>
  );
};

export default Games24HRS;
