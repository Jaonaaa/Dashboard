import { Route, Routes } from "react-router-dom";

import "./App.sass";
import Navbar from "./components/Navbar/Navbar";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
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
        <Route path="/chat" element={<ContentContainer></ContentContainer>} />
        <Route
          path="Home/Test/example_1"
          element={<ContentContainer></ContentContainer>}
        />{" "}
        <Route
          path="/example_11"
          element={<ContentContainer></ContentContainer>}
        />
        <Route path="/test">
          <Route
            path="example_1"
            element={<ContentContainer></ContentContainer>}
          />
          <Route
            path="example_2"
            element={<ContentContainer></ContentContainer>}
          />
        </Route>
        <Route
          path="/overview"
          element={<ContentContainer></ContentContainer>}
        />
        <Route
          path="/something"
          element={<ContentContainer></ContentContainer>}
        />
        <Route
          path="/settings"
          element={<ContentContainer></ContentContainer>}
        />
      </Routes>
    </div>
  );
}

export default App;
