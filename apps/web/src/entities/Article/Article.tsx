import type { TypeComment } from '@shared/api'
import type { ArticleProps } from './article.types'

export const Article = ({
	id,
	title,
	content,
	comments,
	createdAt,
}: ArticleProps) => {
	return (
		<div>
			<article key={id}>
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
			{comments?.length && (
				<div>
					<h3 className='mt-6 mb-4'>Комментарии</h3>
					<div className='flex flex-col gap-5'>
						{comments.map((comment: TypeComment) => (
							<div key={comment.id} className='p-4 bg-zinc-200 rounded-xl'>
								<h4 className='mb-3'>{comment.author_name}</h4>
								<p className='mb-3'>{comment.content}</p>
								<p className='text-end'>{comment.created_at}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
