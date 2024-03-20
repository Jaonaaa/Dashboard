import { Route } from "react-router-dom";
import { useMyNotifs } from "./utilsComponents/Notif/useNotifs";
import { useDefaultTheme } from "./themes/Theme";
import { AnimatePresence } from "framer-motion";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NavPage from "./pages/NavPage";
import "./App.sass";

function App() {
  useDefaultTheme();
  const { notifs } = useMyNotifs();
  return (
    <div className="App">
      {notifs.map((notif) => notif)}
      <AnimatePresence mode="wait">
        <Navbar key={"nav"} />
      </AnimatePresence>
      <NavPage key={"nav_page"}>
        <Route path="/login" element={<Login />} />
      </NavPage>
    </div>
  );
}

export default App;
