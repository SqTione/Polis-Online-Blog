export type TypeComment = {
	id: number
	author_name: string
	content: string
	article_id: number
	created_at: string
	updated_at: string
}

export type TypeCommentResponse = TypeComment

export type TypeCommentForm = {
	author_name: string
	content: string
}
