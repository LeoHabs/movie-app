import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";


const App = () => {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={"Page not Found"} />
      </Route>
    </Routes>
  )
}

export default App;
