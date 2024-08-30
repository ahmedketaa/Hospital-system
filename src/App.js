import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login/login";
import RegisterPage from "./pages/auth/register/register";
import SpecialtyDetailComponent from "./pages/Specialtie details/SpecialtyDetailComponent";
import SpecialtiesComponent from "./pages/Specialties/SpecialtiesComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/specialt" element={<SpecialtiesComponent />} />
        <Route path="/specialty/:id" element={<SpecialtyDetailComponent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
