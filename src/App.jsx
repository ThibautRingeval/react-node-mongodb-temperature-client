import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import Graphics from './components/graphic';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="container text-center mt-5">
        <h1>Page d'accueil</h1>
        <nav className="mt-3">
          <Link to="/graphic" className="btn btn-primary">
            Graphic
          </Link>
        </nav>
      </div>
    ),
  },
  {
    path: 'graphic',
    element: <Graphics/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
