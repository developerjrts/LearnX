import Footer from "@/components/Footer"
import LandingHero from "@/components/LandingHero"
import Nav from "@/components/Nav"
import PromotionCard from "@/components/PromotionCard"
import { Box } from "@mui/material"

const LandingPage = () => {
  return (
    <Box
    className="flex flex-col gap-2 w-screen"
    >
        <Nav />
        <LandingHero />
        <div className="w-full p-4 md:py-5 md:px-40">
            <PromotionCard />
        </div>
        <Footer />
    </Box>
  )
}

export default LandingPage