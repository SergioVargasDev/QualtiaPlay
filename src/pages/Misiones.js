import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./Misiones.module.css";
import Middle from "../components/Middle/Middle";

const Misiones = () => {
  const navigate = useNavigate();
  
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
        <Middle />
      </section>
      <FrameComponent7 />
    </div>
  );
};

export default Misiones;
