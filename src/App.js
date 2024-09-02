import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login/login";
import RegisterPage from "./pages/auth/register/register";
import Blogs from "./blogs/blogs";
import SingleBlog from "./blogs/singleBlog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/singleBlog" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
