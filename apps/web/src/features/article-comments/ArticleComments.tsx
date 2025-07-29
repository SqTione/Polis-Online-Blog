import type { TypeComment } from '@shared/api'

type ArticleCommentsProps = {
	comments: TypeComment[] | null
}

export const ArticleComments = ({ comments }: ArticleCommentsProps) => {
	return (
		<div>
			<h3 className='mt-6 mb-4'>Комментарии</h3>
			<div className='flex flex-col gap-5'>
				{!comments?.length && (
					<p className='mx-auto text-center'>Оставьте первый комментарий</p>
				)}
				{comments?.map((comment: TypeComment) => (
					<div key={comment.id} className='p-4 bg-zinc-200 rounded-xl'>
						<h4 className='mb-3'>{comment.author_name}</h4>
						<p className='mb-3'>{comment.content}</p>
						<p className='text-end'>{comment.created_at}</p>
					</div>
				))}
			</div>
		</div>
	)
}
