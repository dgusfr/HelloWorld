import React from "react";
import styles from "./Contato.module.css";
import PostModelo from "../../Components/PostModelo";
import fotoCapaContato from "../../assets/banner_contato.png";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contato = () => {
  return (
    <PostModelo fotoCapa={fotoCapaContato} titulo=" ">
      <div className={styles.contato}>
        <p>Você pode entrar em contato comigo pelos meios:</p>
        <ul>
          <li>
            <a>
              <FaEnvelope className={styles.icon} />
              diego.u.franco@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/diego-gustavo-franco/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className={styles.icon} />{" "}
              https://www.linkedin.com/in/diego-gustavo-franco/
            </a>
          </li>
        </ul>
      </div>
    </PostModelo>
  );
};

export default Contato;
