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
import Image from "next/image"
import { Avatar } from "../Avatar"

export const CardPost = ({ post }) => {
    return (
        <article>
            <header>
                <figure>
                    <Image src={post.cover} width={438} height={133} alt={`Portada del post de título: ${post.title}`} />
                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer>
                {post.author && (
                <Avatar imageSrc={post.author.avatar} 
                        name={post.author.username}
                />
    )}
            </footer>
        </article>
        
    )

}