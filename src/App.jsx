import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./component/Slider";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Slider />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
