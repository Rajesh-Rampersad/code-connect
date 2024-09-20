import { CardPost } from "@/components/CardPost"
import { logger } from "@/logger"
import styles from './page.module.css'
import Link from "next/link"

// Función para obtener los posts de la API
async function getAllPosts(page) {
  try {
    const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
    if (!response.ok) throw new Error('Ops, alguma coisa correu mal')
    
    logger.info('Posts obtidos com sucesso')
    return await response.json()
  } catch (error) {
    logger.error(error.message)
    return { data: [], prev: null, next: null }
  }
}


export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage)
  return (
    <main className={styles.grid}>
      {posts.map(post =>  <CardPost key={post.id} post={post} />)}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  )
}



