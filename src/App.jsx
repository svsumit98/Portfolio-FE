import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/project" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
