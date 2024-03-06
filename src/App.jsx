import { Route, Routes } from "react-router-dom";
import { useMyNotifs } from "./utilsComponents/Notif/useNotifs";
import { useDefaultTheme } from "./themes/Theme";

import Navbar from "./components/Navbar/Navbar";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Home from "./components/Home/Home";

import Table, { dataDefault } from "./utilsComponents/Table/Table";
import Login from "./components/Login/Login";
import Graphs from "./components/Graphs/Graphs";
import ComponentContainer from "./components/ComponentContainer/ComponentContainer";
import "./App.sass";
import PdfTest from "./components/PdfTest/PdfTest";

function App() {
  useDefaultTheme();
  const { notifs } = useMyNotifs();
  return (
    <div className="App">
      {notifs.map((notif) => notif)}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ContentContainer>
              <Home />
            </ContentContainer>
          }
        />
        <Route
          path="/chat"
          element={
            <ContentContainer>
              <Graphs />
            </ContentContainer>
          }
        />
        {/* <Route path="Home/Test/example_1" element={<ContentContainer></ContentContainer>} />{" "} */}
        <Route path="/example_11" element={<ContentContainer></ContentContainer>} />
        <Route path="/test">
          <Route
            path="example_1"
            element={
              <ContentContainer>
                <PdfTest />
              </ContentContainer>
            }
          />
          <Route path="example_2" element={<ContentContainer></ContentContainer>} />
        </Route>
        <Route
          path="/overview"
          element={
            <ContentContainer>
              <div className="inner">
                <Table {...dataDefault} />
              </div>
            </ContentContainer>
          }
        />
        <Route path="/something" element={<ContentContainer></ContentContainer>} />
        <Route
          path="/components"
          element={
            <ContentContainer>
              <ComponentContainer />
            </ContentContainer>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route path="/settings" element={<ContentContainer></ContentContainer>} />
      </Routes>
    </div>
  );
}

export default App;
