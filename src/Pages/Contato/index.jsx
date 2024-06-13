import React from "react";
import styles from "./Contato.module.css";
import PostModelo from "../../Components/PostModelo";
import fotoCapaContato from "../../assets/banner_contato.png";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contato = () => {
  return (
    <PostModelo fotoCapa={fotoCapaContato} titulo=" ">
      <div className={styles.contato}>
        <p>
          Para entrar em contato comigo, você pode usar qualquer um dos
          seguintes métodos:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:seuemail@example.com">
              <FaEnvelope className={styles.icon} /> seuemail@example.com
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/seuusername/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className={styles.icon} /> seuusername
            </a>
          </li>
          <li>
            <strong>Telefone:</strong>{" "}
            <a href="tel:+5511999999999">
              <FaPhone className={styles.icon} /> +55 11 99999-9999
            </a>
          </li>
        </ul>
      </div>
    </PostModelo>
  );
};

export default Contato;
