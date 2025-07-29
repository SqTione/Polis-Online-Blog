import { CreateArticleForm } from '@features/create-article'
import { Articles } from '@widgets/Articles'

export const FeedPage = () => {
	return (
		<>
			<main>
				<div className='container-xs md:container mx-auto'>
					<h1>Блог Polis.online</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
						quos nihil eaque dolorem veniam libero aspernatur eligendi possimus
						autem quasi vel voluptatem perspiciatis magni saepe, maxime sint.
						Similique, blanditiis dolorem.
					</p>
				</div>
			</main>
			<section>
				<div className='container-xs md:container mx-auto'>
					<CreateArticleForm />
				</div>
			</section>
			<Articles />
		</>
	)
}
