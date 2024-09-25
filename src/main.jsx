import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HotelList from "./Components/Pages/Home/HotelList/HotelList.jsx";
import Form from "./Components/Pages/Form/Form.jsx";
import HotelDetails from "./Components/Pages/Home/HotelList/Hotel/HotelDetails/HotelDetails.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { HotelProvider } from "./context/HotelContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "hoteis",
        element: <HotelList />,
      },
      {
        path: "cadastro",
        element: <Form />,
      },
      {
        path: "hoteis/:id",
        element: <HotelDetails />,
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <HotelProvider>
        <RouterProvider router={Router}/>
      </HotelProvider>
    </ThemeProvider>
  </StrictMode>
)
