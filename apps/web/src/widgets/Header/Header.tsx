import { Logo } from '../../shared/components/Logo'

export const Header = () => {
	return (
		<header
			id='header'
			className='py-5 bg-white border-b-2 border-zinc-200 shadow-xl/5'
		>
			<div className='container-xs md:container grid grid-cols-[1fr_5fr] mx-auto'>
				<Logo />
			</div>
		</header>
	)
}
