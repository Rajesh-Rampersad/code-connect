/**
 * Componente CardPost
 *
 * Renderiza una tarjeta de publicación con una imagen de portada, título, cuerpo y información del autor.
 *
 * @param {object} post - El objeto de publicación que contiene la información de la portada, título, cuerpo y autor.
 * @returns {JSX.Element} El componente CardPost.
 *
 * Ejemplo:
 * ```
 * const post = {
 *   cover: 'https://example.com/cover.jpg',
 *   title: 'Título del post',
 *   body: 'Contenido del cuerpo del post',
 *   author: {
 *     avatar: 'https://example.com/avatar.jpg',
 *     username: 'Juan Pérez'
 *   }
 * };
 *
 * <CardPost post={post} />
 * ```
 */
import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./cardpost.module.css";
import Link from "next/link";

export const CardPost = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
        <header className={styles.header}>
          <figure style={{ height: highlight ? 300 : 133 }}>
            <Image
              src={post.cover}
              fill
              alt={`Capa do post de titulo: ${post.title}`}
            />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
    </Link>
  );
};
