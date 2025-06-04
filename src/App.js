import './App.css';
import { LandingPage } from './components/layout/pages/landing';
import { pageWrapper } from './components/layout/PageWrapper';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: pageWrapper(<LandingPage />)
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
