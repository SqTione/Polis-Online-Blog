import { commentService, type TypeCommentForm } from '@shared/api'
import { useState } from 'react'

export function useSendComment() {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [isSuccess, setIsSuccess] = useState(false)

	const sendComment = async (data: TypeCommentForm, articleId: number) => {
		setIsLoading(true)
		setError(null)
		setIsSuccess(false)

		try {
			await commentService.sendComment(data, articleId)
			setIsSuccess(true)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message || 'Произошла ошибка при отправке')
		} finally {
			setIsLoading(false)
		}
	}

	return { sendComment, isLoading, error, isSuccess }
}
