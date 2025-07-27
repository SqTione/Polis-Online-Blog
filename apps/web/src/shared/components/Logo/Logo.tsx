import logo from '@shared/assets/images/logo.png'
import { Link } from 'react-router-dom'

export const Logo = () => {
	return (
		<Link to='/' className='block w-24'>
			<img
				src={logo}
				alt='Polis.online Blog'
				className='w-full h-auto font-bold text-xl'
			/>
		</Link>
	)
}
