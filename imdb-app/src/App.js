import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


const App = () => {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="*" element={"Page not Found"} />
      </Route>
    </Routes>
  )
}

export default App;
