import { api } from '../api.instance'
import type {
	TypeCommentForm,
	TypeCommentResponse,
} from '../types/comment.types'

class CommentService {
	private BASE_URL = '/articles'

	async sendComment(data: TypeCommentForm, articleId: number) {
		const response = await api.post<TypeCommentResponse>(
			`${this.BASE_URL}/${articleId}/comments`,
			data
		)

		return response.data
	}
}

export const commentService = new CommentService()
