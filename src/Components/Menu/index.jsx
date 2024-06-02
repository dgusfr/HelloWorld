import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <h1 className={styles.titulo}>PORTFOLIO</h1>
        <div className={styles.links}>
          <MenuLink to="/">Início</MenuLink>
          <MenuLink to="/sobremim">Sobre Mim</MenuLink>
          <MenuLink to="/contato">Contato</MenuLink>
        </div>
      </nav>
    </header>
  );
}
