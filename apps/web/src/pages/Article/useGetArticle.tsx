import type { TypeArticleResponse } from '@shared/api'
import { articleService } from '@shared/api/services/article.service'
import { format, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'

/**
 * Hook that gets Article data by article ID
 * @param articleId Article ID
 * @returns data, isLoading
 */
export function useGetArticle(
	articleId: number
): [TypeArticleResponse | null, boolean] {
	const [data, setData] = useState<TypeArticleResponse | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)

			// Getting article data
			const data = await articleService.getArticleById(articleId)

			// Date formatting
			const formatted = {
				...data,
				created_at: format(parseISO(data.created_at), 'dd.MM.yyyy HH:mm'),
				comments: data.comments.map(comment => ({
					...comment,
					created_at: format(parseISO(comment.created_at), 'dd.MM.yyyy HH:mm'),
				})),
			}

			setData(formatted)
			setIsLoading(false)
		}

		fetchData()
	}, [articleId])

	return [data, isLoading]
}
