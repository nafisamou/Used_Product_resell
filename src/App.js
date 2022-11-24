import "./App.css";
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import router from "./pages/Routes/Routes/Routes";


function App() {
  return (
    <div className="w-11/12 mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
