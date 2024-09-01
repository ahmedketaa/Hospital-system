import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login/login";
import RegisterPage from "./pages/auth/register/register";
import SpecialtyDetailComponent from "./pages/Specialtie details/SpecialtyDetailComponent";
import SpecialtiesComponent from "./pages/Specialties/SpecialtiesComponent";
import NewsComponent from "./pages/news/news";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


        <Route path="/specialty" element={<SpecialtiesComponent />} />
        <Route path="/specialty/:id" element={<SpecialtyDetailComponent />} />
        <Route path="/news" element={<NewsComponent />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
