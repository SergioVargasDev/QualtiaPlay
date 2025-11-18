import styles from "./FrameComponent6.module.css";

const FrameComponent6 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.cancelButton}>
          <div className={styles.saveButton}>
            <div className={styles.qButton} />
            <div className={styles.aQuestion}>
              <div className={styles.aQuestionChild} />
              <div className={styles.q}>Q</div>
              <div className={styles.q1}>Q</div>
            </div>
          </div>
        </div>
        <div className={styles.totalInfo}>
          <div className={styles.emptySpace}>100</div>
        </div>
        <div className={styles.tokenstotal}>
          <div className={styles.tokenstotalInner}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/ellipse-151.svg"
            />
          </div>
          <div className={styles.quotaTickets}>
            <div className={styles.cANCELSave} />
            <div className={styles.cANCELSave1} />
            <div className={styles.secondName}>
              <div className={styles.lineParent}>
                <div className={styles.frameInner} />
                <div className={styles.lineDiv} />
                <div className={styles.userInfo}>5</div>
              </div>
              <div className={styles.div}>5</div>
            </div>
          </div>
          <div className={styles.primaryColor}>
            <img
              className={styles.primaryColorChild}
              loading="lazy"
              alt=""
              src="/ellipse-251.svg"
            />
            <div className={styles.primaryColorItem} />
            <div className={styles.primaryColorInner} />
            <div className={styles.qualtiaTikets}>Qualtia Tikets</div>
          </div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <div className={styles.cancelButton1} />
      </div>
      <div className={styles.saveButton1}>
        <div className={styles.nameFields}>
          <div className={styles.firstNameLabel}>
            <div className={styles.lastNameLabel}>
              <button className={styles.emailField}>
                <div className={styles.cancel}>CANCEL</div>
                <div className={styles.emailFieldChild} />
              </button>
              <button className={styles.emailField1}>
                <div className={styles.emailFieldItem} />
                <b className={styles.save}>SAVE</b>
              </button>
            </div>
          </div>
          <div className={styles.segundoNombre}>Segundo Nombre</div>
          <div className={styles.roundedShape} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
