import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const App = () => {
  return (
    <BrowserRouter>
      <h1 className="text-3xl font-bold underline bg-cyan-300 p-2">
        Hello world!
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Other page</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
