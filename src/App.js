import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Route';

function App() {
  return (
    <div>
       <RouterProvider router={route}/>
       <Toaster></Toaster>
    </div>
  );
}

export default App;
