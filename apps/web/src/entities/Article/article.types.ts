import type { TypeComment } from '@shared/api'

export type ArticleProps = {
	id: number
	title: string
	content: string
	comments?: TypeComment[]
	createdAt: string
}
