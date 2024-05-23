import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./Misiones.module.css";
import Medio from "../components/Medio";

const Misiones = () => {
  const navigate = useNavigate();

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
    navigate("/tienda");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  return (
    <div className={styles.misiones}>
      <section className={styles.navbarParent}>
        <NavBar/>
        <Medio />
      </section>
      <FrameComponent7 />
    </div>
  );
};

export default Misiones;
