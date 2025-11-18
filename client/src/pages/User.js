import NavBar from "../components/NavBar/NavBar";
import FrameComponent6 from "../components/FrameComponent6";
import styles from "./User.module.css";

const User1 = () => {
  return (
    <div className={styles.user}>
      <NavBar />
      <main className={styles.pginaPrincipal}>
        <div className={styles.pginaPrincipalChild} />
        <div className={styles.pginaPrincipalItem} />
        <div className={styles.pginaPrincipalInner} />
        <div className={styles.frameDiv}>
          <div className={styles.firstNameLabelParent}>
            <div className={styles.firstNameLabel}>
              <div className={styles.lastNameLabel}>
                <div className={styles.emailField}>
                  <img
                    className={styles.image38Icon}
                    alt=""
                    src="/image-38-1@2x.png"
                  />
                  <div className={styles.profilePicture} />
                </div>
                <h3 className={styles.perfilDeUsuario}>Perfil de Usuario</h3>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/ellipse-38.svg"
              />
              <div className={styles.tokensWon}>
                <span className={styles.tokensWonTxtContainer}>
                  <p className={styles.p}>
                    <span>100</span>
                    <span className={styles.span}>{` `}</span>
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.tokensWon1}> tokens Won</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleParent}>
          <input className={styles.frameItem} type="text" />
          <div className={styles.informationField}>
            <div className={styles.informacinBsicaParent}>
              <div className={styles.informacinBsica}>Información Básica</div>
              <div className={styles.apodoInputField}>
                <div className={styles.primerNombre}>Primer Nombre</div>
                <input className={styles.descriptionField} type="text" />
              </div>
              <div className={styles.aboutMeLabel}>
                <input className={styles.aboutMeLabelChild} type="text" />
                <div className={styles.apodoWrapper}>
                  <div className={styles.apodo}>Apodo</div>
                </div>
              </div>
              <div className={styles.profilePictureContainer}>
                <div className={styles.email}>EMAIL</div>
              </div>
            </div>
            <div className={styles.userInfoHeader}>
              <div className={styles.sobreM}>Sobre mí</div>
            </div>
          </div>
        </div>
        <FrameComponent6 />
      </main>
    </div>
  );
};

export default User1;
