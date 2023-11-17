import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mockman from "mockman-js";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import LoginPage from "./pages/login/LoginPage";
import Label from "./pages/label/Label";
import SignUp from "./pages/signup/SignUp";
import Archive from "./pages/archive/Archive";
import Home from "./pages/home/Home";
import Trash from "./pages/trash/Trash";
import ProfilePage from "./pages/profilePage/ProfilePage";
import LandingPage from "./pages/landing/LandingPage";
import AuthWrapper from "./components/authWrapper/AuthWrapper";
import { useSelector } from "react-redux";
import NewHabit from "./components/newHabit/NewHabit";
import Modal from "./components/modal/Modal";

function App() {
  const storeData = useSelector((state) => state.auth);
  const habitData = useSelector((state) => state.habit);
  const label = useSelector((state) => state.label);
  
  return (
    <div className="App">
      {/* habit modal */}
      {(habitData.isCreateHabit || habitData.isEditHabit) && <NewHabit />}

      {label.isModal && <Modal />}
      {storeData.encodedToken && <Header />}

      <div className="section">
        {storeData.encodedToken && <Sidebar />}
        {/* <Label /> */}

        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/archive"
            element={
              <AuthWrapper>
                <Archive />
              </AuthWrapper>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <AuthWrapper>
                <Home />
              </AuthWrapper>
            }
          ></Route>
          <Route
            path="/trash"
            element={
              <AuthWrapper>
                <Trash />
              </AuthWrapper>
            }
          ></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/labels"
            element={
              <AuthWrapper>
                <Label />
              </AuthWrapper>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <AuthWrapper>
                <ProfilePage />
              </AuthWrapper>
            }
          ></Route>
          <Route path="/mockman" element={<Mockman />}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
