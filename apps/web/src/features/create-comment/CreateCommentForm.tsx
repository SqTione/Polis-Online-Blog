import type { TypeCommentForm } from '@shared/api'
import { useState } from 'react'
import { useSendComment } from './useSendComment'

type CreateCommentFormProps = {
	articleId: number
}

export const CreateCommentForm = ({ articleId }: CreateCommentFormProps) => {
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

		sendComment(formData, articleId)
	}

	return (
		<form className='my-6' onSubmit={handleSubmit}>
			<h3 className='mb-4'>Добавить комментарий</h3>
			<div className='flex flex-col gap-3'>
				<div className='flex flex-col gap-2'>
					<label htmlFor='author_name'>Ваше имя:</label>
					<input
						type='text'
						id='author_name'
						name='author_name'
						placeholder='Иван'
						required
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
						required
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
				{isSuccess && <p style={{ color: 'green' }}>Комментарий отправлен!</p>}
			</div>
		</form>
	)
}
