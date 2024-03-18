import { Route, Routes } from "react-router-dom";
import { useMyNotifs } from "./utilsComponents/Notif/useNotifs";
import { useDefaultTheme } from "./themes/Theme";

import Navbar from "./components/Navbar/Navbar";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Home from "./components/Home/Home";

import Table, { dataDefault } from "./utilsComponents/Table/Table";
import Login from "./components/Login/Login";
import ArtisticGender from "./components/Add/ArtisticGender/ArtisticGender";
import ArtworkType from "./components/Add/ArtwokType/ArtworkType";
import Category from "./components/Add/Category/Category";
import Colors from "./components/Add/Colors/Colors";
import AddSubjectExpo from "./components/Expo/Add_/AddSubjectExpo";
import List from "./components/Expo/List/List";
import AddExpo from "./components/Expo/Add_/AddExpo";
import "./App.sass";
import Validation from "./components/Validation/Validation";
import Overview from "./components/Overview/Overview";

function App() {
  useDefaultTheme();
  const { notifs } = useMyNotifs();
  return (
    <div className="App">
      {notifs.map((notif) => notif)}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/validation" element={<Validation />} />

        <Route path="/add">
          <Route path="artistic_gender" element={<ArtisticGender />} />
          <Route path="artwork_type" element={<ArtworkType />} />
          <Route path="category" element={<Category />} />
          <Route path="colors" element={<Colors />} />
        </Route>

        <Route path="/expo">
          <Route path="list" element={<List />} />
          <Route path="add_subject" element={<AddSubjectExpo />} />
          <Route path="add" element={<AddExpo />} />
        </Route>

        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
