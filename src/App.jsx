import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from "./components/HomePage"


const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />
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
