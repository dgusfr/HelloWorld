import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import minhaFoto from "../../assets/minha_foto.png";

export default function Banner() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 750);
    });
  }, []);

  if (location.pathname === "/sobremim" || location.pathname === "/contato") {
    return null;
  }

  if (isMobile) {
    return (
      <div className={styles.banner}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}>
            Olá, eu sou
            <br />
            Diego Franco!
          </h1>
          <p className={styles.paragrafo}>
            Front End Developer <br /> & <br /> IT Support Analyst
          </p>
          <div>
            <p>Localizado em São Paulo-SP</p>
          </div>
        </div>
        <div className={styles.imagens}>
          <img className={styles.minhaFoto} src={minhaFoto} alt="Foto" />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, eu sou
          <br />
          Diego Franco!
        </h1>
        <p className={styles.paragrafo}>
          Front End Developer <br /> & <br /> IT Support Analyst
        </p>
        <div>
          <p>Localizado em São Paulo-SP</p>
        </div>
      </div>
      <div className={styles.imagens}>
        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto" />
      </div>
    </div>
  );
}
