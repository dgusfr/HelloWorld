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
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ullam,
        facilis fugiat tempora ad beatae, iusto deserunt obcaecati pariatur
        veritatis ab modi. Autem ratione eum veniam assumenda nobis, culpa
        ipsam?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam enim
        expedita, rerum quasi ipsa itaque? Et cumque tenetur enim recusandae
        voluptates corporis porro officia commodi autem nihil temporibus,
        tempora repellat.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus itaque
        dolorem exercitationem, vel cumque sapiente magni deleniti dolorum ex
        quasi quia harum dolor! Reprehenderit officia sapiente magni facere
        quaerat odio.
      </p>
    </PostModelo>
  );
}
