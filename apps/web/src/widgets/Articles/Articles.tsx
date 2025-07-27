import { ArticleCollapsed } from '@entities/Article'
import type { TypeArticle } from '@shared/api'
import { useGetArticles } from './useGetArticles'

export const Articles = () => {
	const [data, isLoading] = useGetArticles(1)

	return (
		<section id='articles'>
			<div className='container-xs md:container mx-auto'>
				<h2 className='mb-6'>Статьи</h2>
				<div className='grid grid-flow-row gap-4'>
					{isLoading ? (
						<p className='mx-auto text-center'>Загрузка...</p>
					) : (
						data?.articles.map((article: TypeArticle) => (
							<ArticleCollapsed
								key={article.id}
								title={article.title}
								content={article.content}
								createdAt={article.created_at}
							/>
						))
					)}
				</div>
			</div>
		</section>
	)
}
