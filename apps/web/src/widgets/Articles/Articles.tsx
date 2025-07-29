import { ArticleCollapsed } from '@entities/Article'
import type { TypeArticle } from '@shared/api'
import { Pagination } from '@shared/components/Pagination'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetArticles } from './useGetArticles'

export const Articles = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const [data, isLoading] = useGetArticles(pageNumber)
	const navigate = useNavigate()

	const handlePageChange = (page: number) => {
		setPageNumber(page)
	}

	const handleArticleClick = (articleId: number) => {
		navigate(`/articles/${articleId}`)
	}

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
								id={article.id}
								title={article.title}
								content={article.content}
								createdAt={article.created_at}
								onClick={() => {
									handleArticleClick(article.id)
								}}
							/>
						))
					)}
				</div>
				{!isLoading && !data?.articles.length ? (
					<p className='mx-auto text-center'>
						Здесь ещё нет статей. Опубликуйте статью первым!
					</p>
				) : (
					<Pagination
						currentPage={data?.meta.current_page}
						lastPage={data?.meta.last_page}
						onPageChange={handlePageChange}
					/>
				)}
			</div>
		</section>
	)
}
