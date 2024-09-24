import { logger } from "@/logger"
import { remark } from 'remark'
import html from 'remark-html'
import styles from '@/app/page.module.css'
import { CardPost } from "@/components/CardPost"

async function getPostBySlug(slug) {
    const url = `http://localhost:3042/posts?slug=${slug}`
    const response = await fetch(url)
    if (!response.ok) {
        logger.error(`Ops, algo deu errado: ${response.status}`)
        return {}
    }
    logger.info(`Post ${slug} encontrado com sucesso`)
    const data = await response.json()
    if (data.length == 0) {
        logger.error(`Post ${slug} não encontrado`)
        return {}
    }

    const post = data[0]
    // uso de remark
    const processedContent = await remark()
        .use(html)
        .process(post.markdown)
    const htmlContent = processedContent.toString()

    post.markdown = htmlContent


    return post

}

const PagePost = async ({ params }) => {
    const post = await getPostBySlug(params.slug)

    return (
        <div>
            <CardPost post={post} highlight />
            <h3 className={styles.subtitle}>Código</h3>
            <div className={styles.code}>
                <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
            </div>

        </div>
    )
}

export default PagePost
