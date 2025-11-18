import { useCallback } from "react";
import NavBar from "../components/NavBar/NavBar";
import Middle from "../components/Middle/Middle";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent from "../components/FrameComponent";
import ScreenshotHolder from "../components/ScreenshotHolder";
import styles from "./Games24HRS.module.css";

const Games24HRS = () => {
  return (
    <div className={styles.games24hrs}>
      <section className={styles.gameHRSContainer}>
      <NavBar />
      <Middle />   
      </section>
      <div className={styles.games24hrsChild} />
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <ScreenshotHolder rectangle38="/rectangleBackground.svg" name="Puzzle" text="Use un tiket para ganar increibles premios" image="/puzzlePic.png"/>
        <div className={styles.frameParent}>
          <FrameComponent5 />
          <FrameComponent />
        </div>
        <ScreenshotHolder rectangle38="/rectangleBackground.svg" name="Flappy Cart" text="Use Un Tiket Jugar Y Poder Ganar Increibles Premios" image="/flappyBird.png"/>
      </section>
    </div>
  );
};

export default Games24HRS;
