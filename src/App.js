import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Main from './layout/Main';
import Error from './components/Error/Error';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          
          element: <Home></Home>
        },
        
        {
          path: '/statistics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics />
        },
        {
          path: 'blog',element: <Blog />
        
        },
        {
          path: 'react',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz/1')
          },
          element: <Quiz />
        
        },
        {
          path: 'JavaScript',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz/2')
          },
          element: <Quiz />
        },
        {
          path: 'css',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz/4')
          },
          element: <Quiz />
        },
        {
          path: 'git',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz/5')
          },
          element: <Quiz />
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
