import { useEffect, useState } from 'react'
import axios, {isAxiosError} from "axios"
import type { User } from '@/types/types'
import { Avatar, Skeleton, Box, Button, Card, Typography } from '@mui/material'

const Profile = () => {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User >()

    const getUser = async() => {
        setLoading(true)
        try {
            const {data} = await axios.get("http://localhost:5000/api/user", {
                withCredentials: true
            });

            setUser(data.user )
            console.log(data);
            

        } catch (error) {
            console.log(error);
            if (isAxiosError(error)) {
                console.log(error.response?.data.message);
                
            };
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getUser()
    }, [])

  return (
    <div className='min-h-screen bg-gray-200 w-creen p-4 md:p-20'>
        
        <Card className='p-4 gap-6 flex flex-col items-center md:flex-row'>
            {
                loading ? <Skeleton 
                variant='circular'
                sx={{
                    width: 100,
                    height: 100,
                }}
                />
                :
                <Avatar
            src={user?.avatar}
            sx={{
                width: 100,
                height: 100,
            }}
            />
            }
            <Box>
                <Typography
                variant='h4'
                sx={{
                    fontWeight: "bold"
                }}
                >{user?.name || <Skeleton
                variant='text'
                />}</Typography>
                <Typography
                variant='h6'
                >@{user?.username || <Skeleton
                variant='text'
                />}</Typography>
                <Box className="flex md:flex-row flex-col gap-4 mt-2">
                    <Button
                    variant='contained'
                    >Request Skill Swap</Button>
                    <Button 
                    variant='outlined'
                    >Message</Button>
                </Box>
            </Box>
        </Card>

    </div>
  )
}

export default Profile