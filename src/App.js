import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login/login";
import RegisterPage from "./pages/auth/register/register";
import Home from "./pages/Home/Home";
import SpecialtyDetailComponent from "./pages/Specialtie details/SpecialtyDetailComponent";
import SpecialtiesComponent from "./pages/Specialties/SpecialtiesComponent";
import NewsComponent from "./pages/news/news";
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctors from "./pages/Doctors/Doctors";
import DoctorProfile from "./pages/doctorProfle/doctorProfile";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blogs from "./blogs/blogs";
import SingleBlog from "./blogs/singleBlog";



function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/specialty" element={<SpecialtiesComponent />} />
        <Route path="/specialty/:id" element={<SpecialtyDetailComponent />} />
        <Route path="/news" element={<NewsComponent />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/doctorprofile/:id" element={<DoctorProfile />} />
        <Route path="/" element={<Home/>} /> 
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/singleBlog" element={<SingleBlog />} />
   
      </Routes>
      <SubFooter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
