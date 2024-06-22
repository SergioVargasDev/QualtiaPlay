import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.scanCodeArea}>
      <div className={styles.redeemCode}>
        <div className={styles.canjeaCodigo}>Reedem code</div>
      </div>
      <div className={styles.useMessage}>
        <input
          className={styles.inputField}
          placeholder="Insert the code to redeem"
          type="text"
        />
        <div className={styles.canjeArea}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
          </div>
          <div className={styles.canjear}>Redeem!</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
