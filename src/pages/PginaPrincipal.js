import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PginaPrincipal.module.css";

const PginaPrincipal = () => {
  const navigate = useNavigate();

  const onLoginBtnContainerClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  const onRegisterBtnContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.pginaPrincipal}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.circleElement}>
          <img className={styles.bgIcon} loading="lazy" alt="" src="/bg.svg" />
        </div>
      </div>
      <div className={styles.loginPanel}>
        <div className={styles.registrationPanel}>
          <div className={styles.registrationPanelInner}>
            <div className={styles.usernameParent}>
              <div className={styles.username}>
                <img
                  className={styles.userIcon}
                  loading="lazy"
                  alt=""
                  src="/user.svg"
                />
                <div className={styles.usuario}>Usuario</div>
              </div>
              <div className={styles.password}>
                <img
                  className={styles.lockIcon}
                  loading="lazy"
                  alt=""
                  src="/lock.svg"
                />
                <div className={styles.contrasea}>contraseña</div>
                <div className={styles.groupParent}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                  <img
                    className={styles.image41Icon}
                    loading="lazy"
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
              </div>
              <div className={styles.activateSignIn}>
                <div
                  className={styles.loginBtn}
                  onClick={onLoginBtnContainerClick}
                >
                  <div className={styles.iniciarSesin}>InicIAR SESIÓN</div>
                  <div className={styles.iniciarSesin1}>InicIAR SESIÓN</div>
                </div>
                <div className={styles.forgotPasswordLink}>
                  <div
                    className={styles.registerBtn}
                    onClick={onRegisterBtnContainerClick}
                  >
                    <div className={styles.registrarse}>Registrarse</div>
                    <div className={styles.registrarse1}>Registrarse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.olvidasteLaContrasea}>
            ¿Olvidaste la contraseña?
          </div>
        </div>
      </div>
    </div>
  );
};

export default PginaPrincipal;
