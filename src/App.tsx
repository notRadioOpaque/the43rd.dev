import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import SmoothScroll from "./features/SmoothScroll";

function App() {
	const router = createBrowserRouter([
		{
			element: <SmoothScroll><AppLayout /></SmoothScroll>,
			errorElement: <Error />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
			]
		}
	])

	return <RouterProvider router={router} />
}

export default App;