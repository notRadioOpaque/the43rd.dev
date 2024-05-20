import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SmoothScroll from "./features/SmoothScroll";
import Error from "./ui/pages/Error/Error";
import AppLayout from "./ui/pages/AppLayout/AppLayout";
import Home from "./ui/pages/Home/Home";
import AboutMe from "./ui/pages/AboutMe/AboutMe";
import Projects from "./ui/pages/Projects/Projects";
import Map from "./ui/components/Map/Map";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <SmoothScroll>
          <AppLayout />
        </SmoothScroll>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <AboutMe />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "location",
          element: <Map />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
