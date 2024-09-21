import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'

import HomePage from "./pages/HomePage"
import BlogPage from './pages/BlogPage'

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <HomePage />
		},
		{
			path: '/blog/:blogTitle',
			element: <BlogPage />
		}
	],
	{
		basename: '/Ngeblog/'
	}
)

function App() {
	const theme = useSelector((state) => state.theme.theme)

	const appThemeClass = theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'

	return (
		<div className={`${appThemeClass} min-h-screen`}>
			<RouterProvider router={router} />
		</div>
	)
}

export default App