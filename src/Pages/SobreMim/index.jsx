import styles from "./SobreMim.module.css";
import PostModelo from "../../Components/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Diego!</h3>

      <img src={fotoSobreMim} alt="Foto" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Officia neque, nemo aperiam ipsa cupiditate vitae at voluptatibus magni?
        Maiores explicabo eius nam sapiente quod, rerum nisi officia ab
        temporibus odit?
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou na Federal... Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Neque maxime minima expedita, nam
        quos facilis voluptates facere molestias deleniti a. Animi
        necessitatibus nisi porro itaque quaerat fugiat aperiam blanditiis non?
      </p>
      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Engenharia Elétrica de Computação...
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        veritatis corporis dolorum eum praesentium hic repellendus voluptate
        voluptatum quibusdam qui minima aliquid perspiciatis voluptas,
        repudiandae non, nihil explicabo. Sequi, velit?
      </p>
      <section
        className={styles.experiencia}
        id="experiencia"
        aria-label="Experiência"
      >
        <div className={styles.experienciaContainer}>
          <h2 className={styles.experienciaSubtitulo}>Experiência</h2>
          <div className={styles.empresa}>
            <span className={styles.empresaAno}>2023-</span>
            <h3 className={styles.empresaTitulo}>Shipay</h3>
            <span className={styles.empresaTitulo}>IT Support Analyst</span>
            <p className={styles.empresaTexto}>
              Sou responsável por dar suporte a operação, que envolve desde o
              atendimento ai cliente até a utilização da API e testes
              automatizados.
            </p>
            <ul className={styles.empresaHabilidades}>
              <li>Zendesk</li>
              <li>Postman</li>
              <li>grafana</li>
              <li>DataDog</li>
              <li>Jira</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.formacao} id="formacao" aria-label="Formação">
        <div className={styles.formacaoContainer}>
          <h2 className={styles.formacaoSubtitulo}>Formação</h2>
          <div>
            <p className={styles.formacaoTexto}>
              Curso Engenharia de Computação na Universidade Virtual do Estado
              de São Paulo, concomitantemente com Análise e Desenvolvimento de
              Sistemas pela Anhembi Morumbi, o que tem contribuído
              significativamente no meu desenvolvimento profissional.
            </p>
            <ul className={styles.faculdadeLista}>
              <li className={styles.faculdade}>
                <span className={styles.faculdadeTipo}>Bacharel</span>
                <h3 className={styles.faculdadeCurso}>
                  Engenharia de Computação
                </h3>
                <h4 className={styles.faculdadeCurso}>De 2023 à 2027</h4>
                <span className={styles.faculdadeInstituicao}>
                  Univesp - Universidade Virtual do Estado de São Paulo
                </span>
              </li>
              <li className={styles.faculdade}>
                <span className={styles.faculdadeTipo}>Tecnólogo</span>
                <h3 className={styles.faculdadeCurso}>
                  Análise e Desenvolvimento de Sistemas
                </h3>
                <h4 className={styles.faculdadeCurso}>De 2023 à 2025</h4>
                <span className={styles.faculdadeInstituicao}>
                  Anhembi Morumbi
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PostModelo>
  );
}
