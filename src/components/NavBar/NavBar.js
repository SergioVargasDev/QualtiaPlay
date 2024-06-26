import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBarComponent from "./NavBarComponent";
import styles from "./style.module.css";

const NavBar = () => {
    const navigate = useNavigate();
    const onPortalInteractivoTextClick = useCallback(() => {
        navigate("/games")
  }, []);

  const onImage38Click = useCallback(() => {
    navigate("/user")
  }, [navigate]);

  return (
    <header className={styles.navbar}>
      <NavBarComponent
        onPortalInteractivoTextClick={onPortalInteractivoTextClick}
      />
      <img
        className={styles.image39Icon}
        loading="lazy"
        alt=""
        src="/image-39@2x.png"
      />
      <div className={styles.image38Wrapper}>
        <div className={styles.image38} onClick={onImage38Click} />
      </div>
    </header>
  );
};

export default NavBar;
