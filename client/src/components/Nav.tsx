import logo from "@/assets/images/logo.png"
import { AppBar, Box, Button, Link, Toolbar } from '@mui/material'
import { useNavigate } from "react-router-dom"

const Nav = () => {

    const navigate = useNavigate()

    const links = [
        {
            name: "Explore Skills",
            path: "explore"
        },
        {
            name: "How it works",
            path: "how-it-works"
        },
        {
            name: "About",
            path: "about"
        },
    ]

  return (
    <AppBar
    position='static'
    sx={{
        boxShadow: "none",
        backgroundColor: "#fff",
        color: "#111"
    }}
    >
        <Toolbar sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <h1
className="text-xl font-bold"
>LearnX</h1>

        <Box
        className="md:flex gap-10 hidden items-center justify-center "
        >
        {
            links.map((link, i) => (
                <Link 
                className='text-[#333]'
                href={`/${link.path}`} key={i}>{link.name}</Link>
            ))
        }
        </Box>
        <Box 
        className="flex gap-8"
        >
        <Button 
        onClick={() => navigate("/sign-in")}
        variant="outlined">Sign In</Button>
        <Button
         onClick={() => navigate("/sign-up")}
         sx={{
            display: {xs: "none", sm: "block", md: "block"}
         }}
        variant='contained'>Get Started</Button>
        </Box>

        </Toolbar>
    </AppBar>
  )
}

export default Nav