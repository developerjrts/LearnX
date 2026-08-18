import banner from "@/assets/images/bannner.jpg";
import { Box, Button } from "@mui/material";

const LandingHero = () => {
  return (
    <Box className="w-screen flex flex-col md:flex-row items-center">
      {/* Hero Content */}
      <Box className="w-full md:w-1/2 p-4 md:px-10 md:py-16 flex flex-col gap-2 md:gap-6">
        <Box>
          <p className="text-lg font-semibold text-blue-600 mb-2">
            LearnX
          </p>

          <h1 className="font-bold text-2xl md:text-5xl">
            Learn what you want.
          </h1>

          <h1 className="font-bold text-2xl md:text-5xl text-blue-600">
            Teach what you know.
          </h1>
        </Box>

        <p className="text-base md:text-xl text-gray-700">
          LearnX is a skill-swapping platform where people can learn skills
          from others while teaching skills they already know. Discover
          people based on the skills they offer and the skills they want to
          learn, connect with them, and exchange knowledge.
        </p>

        <Box className="flex md:flex-row flex-col gap-2 md:gap-5">
          <Button variant="contained">
            Start Swapping
          </Button>

          <Button variant="outlined">
            Explore Skills
          </Button>
        </Box>
      </Box>

      {/* Hero Image */}
      <Box className="w-full md:w-1/2 p-4 md:p-10">
        <img
          src={banner}
          alt="LearnX skill swapping platform"
          className="w-full rounded-md"
        />
      </Box>
    </Box>
  );
};

export default LandingHero;