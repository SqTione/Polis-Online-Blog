import { articleService, type TypeArticleForm } from '@shared/api'
import { useState } from 'react'

export function useSendArticle() {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [isSuccess, setIsSuccess] = useState(false)

	const sendArticle = async (data: TypeArticleForm) => {
		setIsLoading(true)
		setError(null)
		setIsSuccess(false)

		try {
			await articleService.createArticle(data)
			setIsSuccess(true)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message || 'Произошла ошибка при создании статьи')
		} finally {
			setIsLoading(false)
		}
	}

	return { sendArticle, isLoading, error, isSuccess }
}
