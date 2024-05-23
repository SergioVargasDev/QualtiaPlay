import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Medio.module.css";
import token from  "../img/Token.png"
import tiket from  "../img/TokensTotal.png"


const Medio = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/chatbot");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/tienda");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/misiones");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  return (
    <div className={styles.medio}>
{/*azul parte de atras*/}
        <div className={styles.backgroundCircle}>
            <div className={styles.medioItem}>
                <img src={token} alt="token-img"/>
            </div>
            <div className={styles.tokenNum}>
                100
            </div>
            <div className={styles.tokenstotal}>
                <img src={tiket} alt="token-img"/>
            </div>
        </div>
      <div className={styles.frameGroup}>
        <div className={styles.azulParent}>
          <img className={styles.azulIcon} alt="" src="/azul.svg" />
          <button className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} onClick={onRectangleClick} />
            <img
              className={styles.pngtreeChatbotLineIconVect}
              alt=""
              src="/pngtreechatbotlineiconvectorpngimage-6684317-1@2x.png"
            />
            <div className={styles.chatbotIcon}>
              <div className={styles.chatBot}>Chat-bot</div>
            </div>
          </button>
        </div>
        <div className={styles.frameChild2} />
        <button className={styles.rectangleGroup}>
          <div className={styles.frameChild3} />
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild4} onClick={onRectangle2Click} />
            <div className={styles.tienda}>tienda</div>
            <img className={styles.icon} alt="" src="/game-area@2x.png" />
          </div>
        </button>
        <div className={styles.frameDiv}>
          <div className={styles.frameChild5} />
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild6} onClick={onRectangle3Click} />
            <div className={styles.misiones}>Misiones</div>
            <img
              className={styles.currentLocationLogoWorldMaIcon}
              loading="lazy"
              alt=""
              src="/currentlocationlogoworldmaplocationlogosignmapgraphicfreepng-1@2x.png"
            />
          </div>
        </div>
        <button className={styles.frameButton}>
          <div className={styles.frameChild7} />
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild8} onClick={onRectangle4Click} />
            <div className={styles.juegos}>Juegos</div>
            <img className={styles.icon1} alt="" src="/twitter-icon@2x.png" />
          </div>
        </button>
        <div className={styles.frameChild9} />
        <div className={styles.frameChild10} />
        <img
        /* aqui va la foto de quialtia*/
          className={styles.image41Icon}
          loading="lazy"
          alt=""
          src="/image-41@2x.png"
        />
      </div>
    </div>
  );
};

export default Medio;
