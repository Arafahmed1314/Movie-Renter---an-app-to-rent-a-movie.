import { useReducer, useState } from "react";
import "./App.css";

import { MovieContext, ThemeContext } from "./Context";
import Page from "./comonents/Page";
import { cartReducer, initialState } from "./comonents/reducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <MovieContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Page />
          <ToastContainer />
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  );
}

export default App;
