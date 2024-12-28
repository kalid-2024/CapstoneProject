import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import LandingPage from './components/Pages/LandingPage';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: '/',
          index: true,
          element: <LandingPage />,
        },
        {
          path: "/search",
          element: <p>Search for Movies</p>,
        },
      ],
    },

  ])

  function App() {
  return  <RouterProvider  router={router}/>;
}

export default App