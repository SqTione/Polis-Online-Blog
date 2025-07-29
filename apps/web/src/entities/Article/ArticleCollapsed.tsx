type ArticleProps = {
	title: string
	content: string
	createdAt: string
}

export const ArticleCollapsed = ({
	title,
	content,
	createdAt,
}: ArticleProps) => {
	return (
		<article className='cursor-pointer'>
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
