import NavBar from "../components/NavBar";
import Medio from "../components/Medio";

import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ScreenshotHolder from "../components/ScreenshotHolder";
import styles from "./Games.module.css";

const Games = () => {
  return (
    <div className={styles.games}>
      <section className={styles.gamesContainer}>
        <NavBar />
        <Medio />
      </section>
      <div className={styles.gamesChild} />
      <section className={styles.ticketsArea}>
        <div className={styles.ticketsAreaChild} />
        <FrameComponent2 rectangle30="/rectangle-30@2x.png" />
        <div className={styles.rouletteButtonParent}>
          <FrameComponent1 />
          <FrameComponent />
        </div>
        <ScreenshotHolder rectangle38="/rectangle-38.svg" />
      </section>
    </div>
  );
};

export default Games;
