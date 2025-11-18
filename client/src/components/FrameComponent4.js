import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.usernameWrapper}>
        <div className={styles.username}>
          <img
            className={styles.userIcon}
            loading="lazy"
            alt=""
            src="/user1.svg"
          />
          <div className={styles.email}>Email</div>
        </div>
      </div>
      <div className={styles.passwordWrapper}>
        <div className={styles.password}>
          <img
            className={styles.lockIcon}
            loading="lazy"
            alt=""
            src="/lock1.svg"
          />
          <div className={styles.contrasea}>contraseña</div>
        </div>
      </div>
      <button className={styles.password1}>
        <img className={styles.lockIcon1} alt="" src="/lock1.svg" />
        <div className={styles.reingresarLaContrasea}>
          Reingresar la contraseña
        </div>
      </button>
      <div className={styles.loginBtnWrapper}>
        <button className={styles.loginBtn}>
          <div className={styles.crearCuenta}>Crear Cuenta</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent4;
