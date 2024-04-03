import { useContext } from "react";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register";
import "./style.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext)
  //making a protected route
  const ProtectedRoute = ({ children }) => {
    //if there is no current user then return to the loginpage
    if (!currentUser) {
      return <Login />;
    }
    //if there is a user then return the home page that means children
    return children
  }

  return (


    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route exact path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
