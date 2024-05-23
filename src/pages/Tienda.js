import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import PremiumClients from "../components/PremiumClients";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import styles from "./Tienda.module.css";

const Tienda = () => {
  const navigate = useNavigate();

  const onScreenshot20240303At304Click = useCallback(() => {
    window.open("https://qualtia.com.mx/");
  }, []);

  const onPortalInteractivoTextClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  const onImage38Click = useCallback(() => {
    // Please sync "Usuario" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    navigate("/chatbot");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/misiones");
  }, [navigate]);

  const onJuegosTextClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  return (
    <div className={styles.tienda}>
      <main className={styles.header}>
        <section className={styles.mainrect} />
        <NavBar
          screenshot20240303At304MarginRight="unset"
          onScreenshot20240303At304Click={onScreenshot20240303At304Click}
          onPortalInteractivoTextClick={onPortalInteractivoTextClick}
          onImage38Click={onImage38Click}
        />
        <PremiumClients />
      </main>
      <div className={styles.medio}>
        <div className={styles.medioChild} />
        <div className={styles.medioItem} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <div className={styles.missionLogoParent}>
              <div className={styles.missionLogo} />
              <div className={styles.widgetParent}>
                <div className={styles.widget} />
                <div className={styles.q}>Q</div>
                <div className={styles.q1}>Q</div>
              </div>
            </div>
          </div>
          <div className={styles.tokensCount}>
            <div className={styles.div}>100</div>
          </div>
          <div className={styles.tokenstotal}>
            <div className={styles.tokenstotalInner}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/ellipse-15.svg"
              />
            </div>
            <div className={styles.tokenstotalChild} />
            <div className={styles.ellipseParent}>
              <div className={styles.frameInner} />
              <div className={styles.ellipseDiv} />
              <div className={styles.chatbotIcon}>
                <div className={styles.mainContent}>
                  <div className={styles.locationLogo} />
                  <div className={styles.worldMapLogo}>5</div>
                </div>
                <div className={styles.signImage}>5</div>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.ellipseIcon}
                loading="lazy"
                alt=""
                src="/ellipse-25.svg"
              />
              <div className={styles.frameChild1} />
              <div className={styles.frameChild2} />
              <div className={styles.qualtiaTikets}>Qualtia Tikets</div>
            </div>
          </div>
        </div>
        <div className={styles.currentLocation}>
          <FrameComponent11
            propPadding="var(--padding-smi-5) var(--padding-5xl-7) var(--padding-smi-1) var(--padding-6xl-3)"
            onRectangleClick={onRectangleClick}
          />
          <div className={styles.mainBanner} />
          <FrameComponent10
            showRectangleDiv={false}
            propBorderRadius="50px"
            propBackgroundColor="#ffd25f"
            propBackgroundColor1="#ffd25f"
          />
          <FrameComponent9
            rectangleDiv
            propBorderRadius="unset"
            propBackgroundColor="unset"
            propBackgroundColor1="#f1f3ff"
            onRectangle2Click={onRectangle2Click}
          />
          <FrameComponent8
            showRectangleDiv={false}
            propBorderRadius="50px"
            propBackgroundColor="#fff"
            onJuegosTextClick={onJuegosTextClick}
          />
          <div className={styles.currentLocationChild} />
          <div className={styles.callToAction} />
          <img
            className={styles.image41Icon}
            loading="lazy"
            alt=""
            src="/image-411@2x.png"
          />
        </div>
      </div>
      <div className={styles.tiendaChild} />
      <div className={styles.tiendaItem} />
      <div className={styles.tiendaInner} />
    </div>
  );
};

export default Tienda;
