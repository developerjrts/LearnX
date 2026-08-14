import logo from "@/assets/images/logo.png"
import { Box } from "@mui/material"

const Footer = () => {
  return (
    <Box
    className="border-t border-gray-300 flex md:flex-row flex-col md:gap-40 gap-4 w-screen p-6"
    >
        <div className="w-full md:w-1/3" >
            <img src={logo} className="w-30" />
            <p>The premier platform for connecting learners and teacher through skill swapping.</p>
            <p>© Dev JRTS. All right reserved.</p>
        </div>
        <div className="w-1/3 flex flex-col gap-2 md:gap-3" >
           <p>Legal</p>
           <p>Privacy</p>
           <p>Terms</p>
        </div>
    </Box>
  )
}

export default Footer