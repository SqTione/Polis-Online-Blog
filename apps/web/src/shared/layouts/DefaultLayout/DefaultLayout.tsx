import { Footer } from '@widgets/Footer'
import { Header } from '@widgets/Header'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<div className='flex-1'>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}
