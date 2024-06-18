import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import PremiumClients from "../components/PremiumClients";
import styles from "./Tienda.module.css";
import Medio from "../components/Medio";

const Tienda = () => {
  return (
    <div className={styles.tienda}>
        <NavBar/>
        <Medio />
        <PremiumClients />
    </div>
  );
};

export default Tienda;
