import type { ArticleProps } from './article.types'

export const ArticleCollapsed = ({
	title,
	content,
	createdAt,
	onClick,
}: ArticleProps & { onClick?: () => void }) => {
	return (
		<article className='cursor-pointer' onClick={onClick}>
			<div className='p-4 bg-zinc-200 rounded-xl'>
				<div className='flex justify-between items-center mb-4'>
					<h3>{title}</h3>
				</div>
				<div>
					<p className='line-clamp-5'>{content}</p>
				</div>
				<div className='flex justify-end items-center gap-6 mt-6'>
					<p>{createdAt}</p>
				</div>
			</div>
		</article>
	)
}
