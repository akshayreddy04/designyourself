import AdminPortal from "./components/adminportal";
import Intro from "./components/intro";
import LoginPage from "./components/loginpae";
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import UserPortal from "./components/userportal";
import Design from "./components/design";
import Cart from "./components/cartpage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/adminportal" element={<AdminPortal />} />
        <Route path="/userportal" element={<UserPortal />} />
        <Route path="/design" element={<Design />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
export default App;
