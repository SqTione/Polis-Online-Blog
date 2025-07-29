import { useState } from 'react'
import { useSendArticle } from './useSendArticle'

export const CreateArticleForm = () => {
	const [formData, setFormData] = useState({
		title: '',
		content: '',
	})

	const { sendArticle, isLoading, error, isSuccess } = useSendArticle()

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

		sendArticle(formData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<h3 className='mb-4'>Создать статью</h3>
			<div className='flex flex-col gap-3'>
				<div className='flex flex-col gap-2'>
					<label htmlFor='title'>Название статьи:</label>
					<input
						type='text'
						id='title'
						name='title'
						placeholder='Название вашей статьи'
						onChange={handleChange}
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<label htmlFor='content'>Сообщение:</label>
					<textarea
						id='content'
						name='content'
						placeholder='Ваша статья'
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
				{isSuccess && <p style={{ color: 'green' }}>Статья создана!</p>}
			</div>
		</form>
	)
}
