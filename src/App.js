import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PginaPrincipal from "./pages/PginaPrincipal";
import SignUp from "./pages/SignUp";
import Games from "./pages/Games";
import Games24HRS from "./pages/Games24HRS";
import User1 from "./pages/User";
import Misiones from "./pages/Misiones";
import Tienda from "./pages/Tienda";
import ChatBot from "./pages/ChatBot";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/games":
        title = "";
        metaDescription = "";
        break;
      case "/games24hrs":
        title = "";
        metaDescription = "";
        break;
      case "/user":
        title = "";
        metaDescription = "";
        break;
      case "/misiones":
        title = "";
        metaDescription = "";
        break;
      case "/tienda":
        title = "";
        metaDescription = "";
        break;
      case "/chatbot":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PginaPrincipal />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/games" element={<Games />} />
      <Route path="/games24hrs" element={<Games24HRS />} />
      <Route path="/user" element={<User1 />} />
      <Route path="/misiones" element={<Misiones />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/chatbot" element={<ChatBot />} />
    </Routes>
  );
}
export default App;
