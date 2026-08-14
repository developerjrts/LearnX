import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "@/Pages/NotFound"
import LandingPage from "@/Pages/LandingPage"
import SignIn from "@/Pages/Auth/SignIn"
import SignUp from "@/Pages/Auth/SignUp"


const Router = () => {
  return (
    <BrowserRouter>
    <div className="text-[#333] md:text-lg overflow-x-hidden">
    <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default Router