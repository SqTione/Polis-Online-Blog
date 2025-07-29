import { Article } from '@entities/Article'
import { useParams } from 'react-router-dom'
import { useGetArticle } from './useGetArticle'

export const ArticlePage = () => {
	const { id } = useParams()
	const articleId = Number(id)

	const [data, isLoading] = useGetArticle(articleId)

	return (
		<main>
			<div className='container-xs md:container mx-auto'>
				{isLoading || !data ? (
					<p className='mx-auto text-center'>Загрузка...</p>
				) : (
					<Article
						id={data?.id}
						title={data?.title}
						content={data?.content}
						createdAt={data?.created_at}
						comments={data?.comments}
					/>
				)}
			</div>
		</main>
	)
}
