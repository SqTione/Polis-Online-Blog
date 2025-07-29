import { ArticleComments } from '@features/article-comments'
import { CreateCommentForm } from '@features/create-comment'
import type { ArticleProps } from './article.types'

export const Article = ({
	id,
	title,
	content,
	comments,
	createdAt,
}: ArticleProps) => {
	const articleId = Number(id)

	return (
		<div>
			<article>
				<div className='p-4 bg-zinc-200 rounded-xl'>
					<div className='flex justify-between items-center mb-4'>
						<h3>{title}</h3>
					</div>
					<div>
						<p>{content}</p>
					</div>
					<div className='flex justify-end items-center gap-6 mt-6'>
						<p>{createdAt}</p>
					</div>
				</div>
			</article>

			<CreateCommentForm articleId={articleId} />

			<ArticleComments comments={comments || null} />
		</div>
	)
}
