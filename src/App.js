import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
// import Home from './Components/Home/Home';
// import MovieDetails from './Components/MovieDetails/MovieDetails';
// import AddMovie from './Components/AddMovie/AddMovie';
// import UpdateMovie from './Components/UpdateMovie/UpdateMovie';
import { Suspense, lazy } from 'react';


// const Layout = lazy(()=> import('./Components/Layout/Layout'))
const Home = lazy(() => import('./Components/Home/Home'))
const MovieDetails = lazy(() => import('./Components/MovieDetails/MovieDetails'))
const AddMovie = lazy(() => import('./Components/AddMovie/AddMovie'))
const UpdateMovie = lazy(() => import('./Components/UpdateMovie/UpdateMovie'))

const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'moviedetails/:id', element: <MovieDetails /> },
      { path: 'addmovie', element: <AddMovie /> },
      { path: 'updatemovie/:id', element: <UpdateMovie /> }
    ]
  }
])

function App() {
  return <>
    <Suspense fallback={<div className="text-center pt-5">Loading...</div>}>
      <div className='MainBackground'>
        <RouterProvider router={router} />
      </div>
    </Suspense>
  </>
}

export default App;
