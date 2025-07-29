import { ArticlePage } from '@pages/Article/ArticlePage'
import { DefaultLayout } from '@shared/layouts/DefaultLayout'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { FeedPage } from './pages/Feed'

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path='/' element={<FeedPage />} />
					<Route path='/articles/:id' element={<ArticlePage />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
