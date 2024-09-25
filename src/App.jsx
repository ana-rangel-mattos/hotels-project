import {Outlet} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import {useContext} from "react";
import {ThemeContext} from "./context/ThemeContext.jsx";
import {ToastContainer} from "react-toastify";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="app" id={theme}>
      <Header />
      <Outlet />
      <ToastContainer theme={theme === "light-theme" ? "light" : "dark"}/>
    </div>
  )
}

export default App
