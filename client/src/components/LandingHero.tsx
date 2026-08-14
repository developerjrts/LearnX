import banner from "@/assets/images/bannner.jpg"
import { Box, Button } from "@mui/material"

const LandingHero = () => {
  return (
    <Box className="w-screen flex flex-col md:flex-row">
        <Box className="w-full md:w-1/2 p-4 md:px-10 md:py-16 flex flex-col gap-2 md:gap-6">
        <Box>
        <h1 className="font-bold text-2xl md:text-5xl">Learn what you want.</h1>
        <h1 className="font-bold text-2xl md:text-5xl text-blue-600">Teach what you know.</h1>
        </Box>
        <p className="text-base md:text-xl">LearnX connects you with a people who have the skills you want and want the skills you already have. Swap knowledge, grow together and build commuity.</p>
        <Box className="flex md:flex-row flex-col gap-2 md:gap-5">
            <Button variant="contained">Start Swapping</Button>
            <Button variant="outlined">Explore Skills</Button>
        </Box>
        </Box>
        <Box className="w-full md:w-1/2 p-4 md:p-10">
        <img src={banner} alt="Banner" className="rounded-md" />
        </Box>
    </Box>
  )
}

export default LandingHero