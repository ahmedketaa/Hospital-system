import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login/login";
import RegisterPage from "./pages/auth/register/register";
import DoctorProfile from "./pages/doctorProfle/doctorProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/doctorprofile/:id" element={<DoctorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
