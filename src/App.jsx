import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from "./pages/HomePage"
import BlogPage from './pages/BlogPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />
	},
	{
		path: '/blog/:blogTitle',
		element: <BlogPage />
	}

])

function App() {
	return (
		<div className='bg-slate-800 text-white min-h-screen'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App