import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import Graphics from './components/graphic';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Page d'accueil
        <nav>
          <Link to="/graphic">Graphic</Link>
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
