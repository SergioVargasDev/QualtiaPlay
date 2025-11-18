import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onFormContainerClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  return (
    <div className={styles.signup}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.bgWrapper}>
          <img className={styles.bgIcon} loading="lazy" alt="" src="/bg.svg" />
        </div>
      </div>
      <div className={styles.formParent}>
        <div className={styles.form} onClick={onFormContainerClick}>
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group1.svg"
            />
          </div>
          <FrameComponent4 />
        </div>
        <div className={styles.image41Parent}>
          <img
            className={styles.image41Icon}
            loading="lazy"
            alt=""
            src="/image-41@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
