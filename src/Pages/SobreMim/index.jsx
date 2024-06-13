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
        Comecei minha jornada nas linhas de código em 2021 quando cursava
        Ciência e Tecnologia pela Universidade Federal de Alfenas. Na época eu
        codava apenas em C e C++ para os trabalhos acadêmicos e estudos em
        matemática computacional, mas com o tempo fui me apaixonando por
        programação e resolvi me aprofundar mais nesse mundo.
      </p>
      <p className={styles.paragrafo}>
        Infelizmente na Faculdade que eu estava não tinham cursos que fossem
        voltados a programação, por esse motivo em 2023 migrei para o curso de
        Engenharia de Computação na Universidade Virtual do Estado de São Paulo
        - Univesp, para poder me aprofundar mais nesse mundo de tecnologia e
        continuar melhorando minhas habilidades como engenheiro.
      </p>
      <p className={styles.paragrafo}>
        Em 2023 também iniciei meu curso de tecnologo em Analise e
        desenvcolvimento de sistemas na Anhembi Morumbi, para poder me
        aprofundar mais em desenvolvimento de software e poder me tornar um
        desenvolvedor mais completo.
        <br />
        <br />
        Desde então venho estudando e me aprimorando cada vez mais, sempre
        buscando novos desafios e aprendizados, unindo os conhecimentos da base
        de computação que estou adquirindo na Univesp e a pratica de
        desenvolvimento de software que estou tendo na Anhembi, com os cursos
        livres que realizo para ficar sempre atualizado com as novas
        tecnologias.
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
            <span className={styles.empresaTitulo}>
              Analista de Suporte e Operações N1
            </span>
            <p className={styles.empresaTexto}>
              Sou responsável por dar suporte a operação, que envolve desde o
              atendimento ao cliente até a utilização da API e testes
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
          <div className={styles.empresa}>
            <span className={styles.empresaAno}>2022-</span>
            <h3 className={styles.empresaTitulo}>Desenvolvedor Front-end</h3>
            <p className={styles.empresaTexto}>
              Desde 2022 venho trabalhando como desenvolvedor front-end em
              projetos pessoais e freelances, desenvolvendo sites mais simples
              até aplicações complexas com interações com API´s. Todos os meus
              projetos estão disposniveis em meu Github e na aba Home deste
              site, você pode conferir os melhores projetos.
            </p>
            <ul className={styles.empresaHabilidades}>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next JS</li>
              <li>Sass</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.formacao} id="formacao" aria-label="Formação">
        <div className={styles.formacaoContainer}>
          <h2 className={styles.formacaoSubtitulo}>Formação</h2>
          <div>
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
