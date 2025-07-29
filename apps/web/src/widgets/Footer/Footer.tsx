import { Logo } from '@shared/components/Logo'

export const Footer = () => {
	return (
		<footer id='footer' className='pt-6 pb-8 bg-zinc-200'>
			<div className='container-xs md:container md:grid grid-cols-[1fr_5fr] mx-auto'>
				<div>
					<Logo />
					<p className='mt-4 text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum natus
						explicabo beatae sint laborum. Reprehenderit nemo soluta doloribus
						iure, nostrum eos magnam tempora, unde itaque ipsum veniam nisi,
						quae laborum?
					</p>
				</div>
			</div>
		</footer>
	)
}
