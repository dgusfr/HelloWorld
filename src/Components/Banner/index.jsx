import styles from "./Banner.module.css";
import minhaFoto from "../../assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          adipisci quo pariatur fugit, recusandae sed illo. Impedit enim cum
          ducimus rerum at sed sequi illo! Saepe deserunt debitis pariatur
          ullam?
        </p>
      </div>

      <div className={styles.imagens}>
        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto" />
      </div>
    </div>
  );
}
