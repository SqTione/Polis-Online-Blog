import type { TypeComment, TypeCommentForm } from '@shared/api'
import { useState } from 'react'
import type { ArticleProps } from './article.types'
import { useSendComment } from './useSendComment'

export const Article = ({
	id,
	title,
	content,
	comments,
	createdAt,
}: ArticleProps) => {
	const [formData, setFormData] = useState<TypeCommentForm>({
		author_name: '',
		content: '',
	})
	const { sendComment, isLoading, error, isSuccess } = useSendComment()

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData(prev => ({
			...prev,
			[event.target.name]: event.target.value,
		}))
	}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		sendComment(formData, id)
	}

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
			<form className='my-6' onSubmit={handleSubmit}>
				<h3 className='mb-4'>Добавить комментарий</h3>
				<div className='flex flex-col gap-3'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='article_id'>ID статьи</label>
						<input type='hidden' id='article_id' value={id} />
					</div>
					<div className='flex flex-col gap-2'>
						<label htmlFor='author_name'>Ваше имя:</label>
						<input
							type='text'
							id='author_name'
							name='author_name'
							placeholder='Иван'
							onChange={handleChange}
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<label htmlFor='content'>Сообщение:</label>
						<textarea
							id='content'
							name='content'
							placeholder='Что вы думаете об этой статье?'
							rows={5}
							onChange={handleChange}
						/>
					</div>
					<button
						className='w-max px-4 py-3 font-bold text-md bg-primary rounded-md cursor-pointer'
						type='submit'
					>
						{isLoading ? 'Отправка' : 'Отправить'}
					</button>
					{error && <p style={{ color: 'red' }}>{error}</p>}
					{isSuccess && (
						<p style={{ color: 'green' }}>Комментарий отправлен!</p>
					)}
				</div>
			</form>
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
