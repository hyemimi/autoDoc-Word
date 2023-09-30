import Home from 'pages/home';
import ErrorPage from 'pages/error';
import Selection from 'pages/home/components/Selection';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import 'styles/main.scss';
import DefaultLayout from 'layouts/DefaultLayout';

const router = createBrowserRouter([
  { path: '/', 
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: ':selection', element: <Selection /> }
    ] }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
