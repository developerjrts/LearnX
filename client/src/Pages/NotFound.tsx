import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <Box
    className="flex flex-col min-h-screen text-center gap-4 items-center justify-center"
    >
       <div>
         <h1 className="font-bold text-6xl md:text-8xl text-blue-500">404</h1>
        <p className='font-bold text-xl md:text-2xl'>Looks like this page doesn't exist.</p>
        <p>The page you're looking for couldn't be found.</p>
        <p>Maybe it got swapped, moved, or naver existed in the first place.</p>
       </div>
        <div className="flex flex-col md:flex-row gap-2">
          <Button 
          onClick={() => navigate("/")}
          variant='contained'>Back to LearnX</Button>
          <Button
          onClick={() => navigate("/explore")}
          variant='outlined'>Explore Skills</Button>
        </div>
    </Box>
  )
}

export default NotFound