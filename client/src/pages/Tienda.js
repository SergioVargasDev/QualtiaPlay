import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import PremiumClients from "../components/PremiumClients";
import styles from "./Tienda.module.css";
import Middle from "../components/Middle/Middle";

const Tienda = () => {
  return (
    <div className={styles.tienda}>
        <NavBar/>
        <Middle />
        <PremiumClients />
    </div>
  );
};

export default Tienda;
