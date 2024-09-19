import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login/login";
import RegisterPage from "./pages/auth/register/register";
import Home from "./pages/Home/Home";
import SpecialtyDetailComponent from "./pages/Specialtie details/SpecialtyDetailComponent";
import SpecialtiesComponent from "./pages/Specialties/SpecialtiesComponent";
import NewsComponent from "./pages/news/news";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./pages/Doctors/Doctors";
import DoctorProfile from "./pages/doctorProfle/doctorProfile";
import SubFooter from "./components/SubFooter";
import Header from "./components/Header";
import Blogs from "./blogs/blogs";
import SingleBlog from "./blogs/singleBlog";
import Contact_Us from "./components/Contact_Us/Contact_Us";
import About_us from "./components/About_us/About_us";
import Footer from "./components/Footer";
import NotFound from "./components/404/NotFound";
import { AuthProvider } from "./context/authContext";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";
import ForgotPassword from "./pages/auth/forgotPassword/forgotPassword";
import ResetPasswordForm from "./pages/auth/resetPassword/resetPassword";
import PatientProfile from "./pages/paitentProfile/patientProfile";
import ProfileInfo from "./pages/paitentProfile/profileInfo/profleInfo";
import ProfileAppointment from "./pages/paitentProfile/patientAppointment/profileAppoinment";
import PatientSetting from "./pages/paitentProfile/patientSetting/patientSetting";
import PasswordSetting from "./pages/paitentProfile/changePassword/changePassword";
import RequireAuth from "./components/requireAuth";

function AppRoutes() {
  let { authLocalStorage } = useAuth();
  useEffect(() => {
    authLocalStorage();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPasswordForm />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctorprofile/:id" element={<DoctorProfile />} />

        <Route
          path="/profile"
          element={
            <RequireAuth>
              <PatientProfile />
            </RequireAuth>
          }
        >
          <Route index element={<ProfileInfo />} />
          <Route path="setting" element={<PatientSetting />} />
          <Route path="appointment" element={<ProfileAppointment />} />
          <Route path="changepassword" element={<PasswordSetting />} />
        </Route>
        <Route path="/specialty" element={<SpecialtiesComponent />} />
        <Route path="/specialty/:id" element={<SpecialtyDetailComponent />} />
        <Route path="/news" element={<NewsComponent />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact_Us" element={<Contact_Us />} />
        <Route path="/about_Us" element={<About_us />} />
        <Route path="/singleBlog" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SubFooter />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
