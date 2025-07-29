import type { TypeArticlesResponse } from '@shared/api'
import { articleService } from '@shared/api/services/article.service'
import { format, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'

export function useGetArticles(
	pageNumber: number = 1
): [TypeArticlesResponse | null, boolean] {
	const [data, setData] = useState<TypeArticlesResponse | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)

			// Getting articles for page
			const data = await articleService.getPaginatedArticles(pageNumber)

			// Date formatting
			const formatted = {
				...data,
				articles: data.articles.map(article => ({
					...article,
					created_at: format(parseISO(article.created_at), 'dd.MM.yyyy HH:mm'),
				})),
			}

			setData(formatted)

			setIsLoading(false)
		}

		fetchData()
	}, [pageNumber])

	return [data, isLoading]
}
