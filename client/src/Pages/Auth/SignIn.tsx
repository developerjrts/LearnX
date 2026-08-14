import Toast from '@/components/Toast';
import { url } from '@/constant/url';
import { Box, Button, Card, CircularProgress, IconButton, Link, TextField, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()
    type SnackbarSeverity = 'info' | 'error' | 'success' | 'warning';

    const [loading, setLoading] = useState(false)
    const [snackbar, setSnackbar] = useState<{
      open: boolean;
      message: string;
      severity: SnackbarSeverity;
    }>({
      open: false,
      message: "",
      severity: "info"
    })

    const [username, setUsername] = useState<string >()
    const [password, setPassword] = useState<string >()

    const handleGitHubSignUp = () => {
      window.open("http://localhost:5000/api/auth/github")
    };

    const handleGoogleSignUp = () => {
      window.open("http://localhost:5000/api/auth/google")
    };

    const handleSignUp = async() => {
      setLoading(true)
      try {
      
      const response =  await url.post("http://localhost:5000/api/auth/sign-in", {
          username,
          password
        })

        console.log(response.data)

         setSnackbar({
            open: true,
            message: response?.data.message ? response?.data.message : "Server Busy",
            severity: "success"
          });

          navigate("/dashboard")

      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.response?.data);
          setSnackbar({
            open: true,
            message: error.response?.data.message ? error.response?.data.message : "Server Busy",
            severity: "error"
          });
        }
      } finally {
        setLoading(false)
      }
    }

  return (
    <div className="flex p-3 bg-gray-100 min-h-screen justify-center items-center">
        <Card className='p-6 text-center gap-4 flex flex-col'>
            <Box>
            <h1 className='text-3xl font-semibold'>Welcome Back 👋</h1>
            <h1>Continue your learning journey with LearnX.</h1>
            </Box>

            <TextField
            label="Username"
            placeholder='@jrts_31'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            
            <TextField
            label="Password"
            placeholder='********' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <Button 
            disabled={loading}
            onClick={handleSignUp}
            variant='contained'>
              {
                loading ? <CircularProgress /> : "Sign In"
              }
            </Button>


            <Typography>OR</Typography>
            
            <Box className="flex justify-center gap-6">
            
          <IconButton
          onClick={handleGitHubSignUp}
          >
            <IoLogoGithub color="#000" size={40} />
          </IconButton>
            
          <IconButton
          onClick={handleGoogleSignUp}
          >
            <FcGoogle size={40} />
          </IconButton>

            </Box>

            <Typography>Don't have an Account?<Link
            onClick={() => navigate("/sign-up")}
            className='cursor-pointer'
            > Sign Up</Link></Typography>

           
            
        </Card>
        <Toast
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar((prev) => ({
          ...prev,
          open: false
        }))}
         />
    </div>
  )
}

export default SignIn