
// Primary #6366F1
// Secondary #0EA5E9

import { Button } from "@mui/material"

const PromotionCard = () => {
  return (
    <div className="bg-gradient-to-br p-10 text-center gap-2 md:gap-6 rounded-lg flex flex-col items-center justify-center from-[#6366F1] to-[#0EA5E9]">
      <h1 className="md:text-4xl text-3xl font-bold text-white">Stop scrolling. Start swapping.</h1>
      <p className="text-base md:text-lg text-white">
        Sher what you know. Laern what you've always wannted to know. Join a <br/> global community of lifelong learners.
      </p>
      <Button variant="contained" sx={{backgroundColor: "#FFF", color: "#6366F1" }}>Join LearnX - It's Free</Button>
    </div>
  )
}

export default PromotionCard