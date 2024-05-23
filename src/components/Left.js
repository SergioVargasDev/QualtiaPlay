import styles from "./Left.module.css";

const Left = () => {
  return (
    <div className={styles.left}>
      <div className={styles.leftChild} />
      <div className={styles.separatorParent}>
        <div className={styles.separator} />
        <div className={styles.frameWrapper}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.icroundAdd}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.newChatWrapper}>
              <div className={styles.newChat}>New Chat</div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.qualiBotWrapper}>
        <div className={styles.qualiBot}>
          <b>{`Quali `}</b>
          <span>BOT</span>
        </div>
      </div>
    </div>
  );
};

export default Left;
