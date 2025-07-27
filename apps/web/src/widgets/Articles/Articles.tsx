import { ArticleCollapsed } from '@entities/Article'

export const Articles = () => {
	return (
		<section id='articles'>
			<div className='container-xs md:container mx-auto'>
				<h2 className='mb-6'>Статьи</h2>
				<div className='grid grid-flow-row gap-4'>
					<ArticleCollapsed />
				</div>
			</div>
		</section>
	)
}
