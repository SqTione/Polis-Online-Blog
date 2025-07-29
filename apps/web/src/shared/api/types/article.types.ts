export type TypeArticle = {
	id: number
	title: string
	content: string
	created_at: string
	updated_at: string
}

export type TypeArticleResponse = TypeArticle

export type TypeArticlesResponse = {
	articles: TypeArticleResponse[]
	meta: {
		total: number
		current_page: number
		last_page: number
	}
	links: {
		next: number | null
		prev: number | null
	}
}
