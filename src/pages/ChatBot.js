import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Left from "../components/Left";
import styles from "./ChatBot.module.css";

const ChatBot = () => {

  return (
    <div className={styles.chatbot}>
      <NavBar/>
      <main className={styles.leftParent}>
        <Left />
        <section className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.qualiBotParent}>
              <h1 className={styles.qualiBot}>Quali Bot</h1>
              <div className={styles.cmoPuedoAyudarte}>
                ¿Cómo puedo ayudarte hoy?
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameChild} />
                        <i className={styles.dndePuedoAdquirir}>
                          ¿Dónde puedo adquirir este producto?
                        </i>
                        <div className={styles.porSiTienesDudaEnQueTienWrapper}>
                          <div className={styles.porSiTienes}>
                            Por si tienes duda en que tienda encontrar cierto
                            producto.
                          </div>
                        </div>
                      </div>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameItem} />
                        <i className={styles.comoPuedoConseguir}>
                          ¿Como puedo conseguir más tickets?
                        </i>
                        <div
                          className={styles.enDadoCasoQueQuierasJugarWrapper}
                        >
                          <div className={styles.enDadoCaso}>
                            En dado caso que quieras jugar más juegos y tengas
                            la duda de cómo poder conseguir más tickets.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.frameInner} />
                        <i className={styles.paraQuSirven}>
                          ¿Para qué sirven mis tokens?
                        </i>
                        <div
                          className={styles.porSiQuieresDescubrirElInWrapper}
                        >
                          <div className={styles.porSiQuieres}>
                            Por si quieres descubrir el increíble valor de tus
                            tokens.
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.rectangleParent1}>
                          <div className={styles.rectangleDiv} />
                          <i className={styles.cmoCanjearMis}>
                            ¿Cómo canjear mis tokens?
                          </i>
                          <div
                            className={styles.porSiQuieresSaberDeQuFoWrapper}
                          >
                            <div className={styles.porSiQuieres1}>
                              Por si quieres saber de qué forma canjear tus
                              tokens por premios.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className={styles.inputParent}>
                  <div className={styles.input}>
                    <div className={styles.sendAMessage}>Send a message...</div>
                  </div>
                  <button className={styles.frameButton}>
                    <div className={styles.frameChild1} />
                    <img
                      className={styles.chatMessageIcon}
                      alt=""
                      src="/vector-1.svg"
                    />
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChatBot;
