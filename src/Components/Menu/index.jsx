import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <div>
          <MenuLink to="/">Início</MenuLink>
        </div>
        <div>
          <MenuLink to="/sobremim">Sobre Mim</MenuLink>
          <MenuLink to="/contato">Contato</MenuLink>
        </div>
      </nav>
    </header>
  );
}
