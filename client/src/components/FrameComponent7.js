import Mision from "./Mision";
import styles from "./FrameComponent7.module.css";


const FrameComponent7 = () => {
  return (
    <section className={styles.misionesInner}>
      <div className={styles.frameParent}>
        <div className={styles.misionesWrapper}>
          <h1 className={styles.misiones}>Misiones</h1>
        </div>
        <div className={styles.frameGroup}>
            <Mision
              prop="+ 20"
              perseverante="El Salchichero"
              seConsigueAlGirarLaRuleta="Compra 10 salchichas"
            />
            <Mision
              prop="+ 50"
              perseverante="Perseverante"
              seConsigueAlGirarLaRuleta="Se consigue al girar la ruleta diaria por 30 dias seguidos"
            />
          <Mision
            prop="+ 20"
            perseverante="Carnicero"
            seConsigueAlGirarLaRuleta="Comprar 10 productos de típo carnicería."
            propAlignSelf="unset"
            propWidth="415px"
            propGap="53px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
