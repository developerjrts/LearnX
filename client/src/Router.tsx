import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "@/Pages/NotFound"
import LandingPage from "@/Pages/LandingPage"
import SignIn from "@/Pages/Auth/SignIn"
import SignUp from "@/Pages/Auth/SignUp"
import Dashboard from "@/Pages/Dashboard"
import UserPage from "@/Pages/UserPage"
import Profile from "@/Pages/Profile"
import PrivacyPolicy from "@/Pages/PrivacyPolicy"
import TermsAndCondition from "@/Pages/TermsAndCondition"


const Router = () => {
  return (
    <BrowserRouter>
    <div className="text-[#333] md:text-lg overflow-x-hidden">
    <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
       <Route path="/terms" element={<TermsAndCondition />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default Router