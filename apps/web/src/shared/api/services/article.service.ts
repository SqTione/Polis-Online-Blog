import { api } from '../api.instance'
import type {
	TypeArticleResponse,
	TypeArticlesResponse,
} from '../types/article.types'

class ArticleService {
	private BASE_URL = '/articles'

	/**
	 * Gets paginated articles
	 * @param pageNumber Page number
	 * @returns Articles
	 */
	async getPaginatedArticles(pageNumber: number = 0) {
		const response = await api.get<TypeArticlesResponse>(
			`${this.BASE_URL}?page=${pageNumber}`
		)

		return response.data
	}

	/**
	 * Gets article data by article id
	 * @param articleId Article ID
	 * @returns Article data
	 */
	async getArticleById(articleId: number) {
		const response = await api.get<TypeArticleResponse>(
			`${this.BASE_URL}/${articleId}`
		)

		return response.data
	}
}

export const articleService = new ArticleService()
