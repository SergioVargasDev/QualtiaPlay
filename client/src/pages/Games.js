import NavBar from "../components/NavBar/NavBar";
import Middle from "../components/Middle/Middle";

import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ScreenshotHolder from "../components/ScreenshotHolder";
import styles from "./Games.module.css";

const Games = () => {
  return (
    <div className={styles.games}>
      <section className={styles.gamesContainer}>
        <NavBar />
        <Middle />
      </section>
      <div className={styles.gamesChild} />
      <section className={styles.ticketsArea}>
        <div className={styles.ticketsAreaChild} />
        <ScreenshotHolder rectangle38="/rectangleBackground.svg" name="Puzzle" text="Use un tiket para ganar increibles premios" image="/puzzlePic.png"/>
        <div className={styles.rouletteButtonParent}>
          <FrameComponent1 />
        </div>
        <ScreenshotHolder rectangle38="/rectangleBackground.svg" name="Flappy Cart" text="Use Un Tiket Jugar Y Poder Ganar Increibles Premios" image="/flappyBird.png"/>
        <FrameComponent />
      </section>
    </div>
  );
};

export default Games;
