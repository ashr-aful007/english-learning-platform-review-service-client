import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={Routes}>
  
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
