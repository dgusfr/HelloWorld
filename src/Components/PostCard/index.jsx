import BotaoPrincipal from "../BotaoPrincipal";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal>Ver</BotaoPrincipal>
      </div>
    </Link>
  );
}
