import { Box } from '@mui/material'

const NotFound = () => {
  return (
    <Box
    className="flex flex-col min-h-screen items-center justify-center"
    >
        <p className="font-bold text-4xl">404</p>
        <p>Page not found</p>
    </Box>
  )
}

export default NotFound