import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Toaster } from "./components/toaster"; // Make sure this path is correct

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Portfolio" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </>
  );  
}
export default App;