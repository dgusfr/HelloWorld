import React from "react";
import styles from "./Contato.module.css";

const Contato = () => {
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <p>
        Para entrar em contato comigo, você pode usar qualquer um dos seguintes
        métodos:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:seuemail@example.com">seuemail@example.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/seuusername/"
            target="_blank"
            rel="noreferrer"
          >
            seuusername
          </a>
        </li>
        {/* Adicione mais informações de contato aqui */}
      </ul>
    </div>
  );
};

export default Contato;
