import Navbar from "./components/Navbar";
import {Routes,Route, Navigate} from "react-router-dom";
import HOMEPAGE from "./pages/HomePage.jsx";
import SIGNUPPAGE from "./pages/Signuppage.jsx";
import LOGINPAGE from "./pages/loginpage.jsx";
import SETTINGPAGE from "./pages/SettingsPage.jsx";
import PROFILEPAGE from "./pages/ProfilePage.jsx";
import {useAuthStore} from "./store/useAuthStore.js"
import { useEffect } from "react";
import {Loader} from "lucide-react";
import {Toaster} from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore.js";
const App = () => {
  const {authUser,checkAuth,isCheckingAuth,onlineUsers}= useAuthStore();

  const {theme}=useThemeStore();
  console.log({onlineUsers})
   useEffect(()=>{
    checkAuth();
   },
  [checkAuth]);
  console.log({authUser});
  if(isCheckingAuth && !authUser)
  {
    return(
      <div className="flex items-center ">
        <Loader className=" size-10 animate-spin"/>

      </div>
    )
  }
  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HOMEPAGE/> : <Navigate to="/login"/>}/>
        <Route path="/signup" element={!authUser ? <SIGNUPPAGE/> : <Navigate to="/"/>}/>
        <Route path="/login" element={!authUser ? <LOGINPAGE/> : <Navigate to="/"/>}/>
        <Route path="/settings" element={<SETTINGPAGE/>}/>
        <Route path="/profile" element={authUser ? <PROFILEPAGE/> : <Navigate to="/login"/>}/>

      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
