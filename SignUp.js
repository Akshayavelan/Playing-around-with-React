import { Button, Paper, Stack, TextField, Typography, styled } from "@mui/material"
import { useState } from "react"


export const SignUp = () => {
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    //button Style
        const Button1 = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#68ad7b'),
        backgroundColor: '#68ad7b',
        '&:hover': {
          backgroundColor: '#30b053',
        },
      }));
    const acceptName = (value) => {
        setName(value)
    }
    const acceptPassword = (value) => {
        setPassword(value)
    }
    const acceptEmail = (value) => {
        setEmail(value)
    }
    const acceptPhone = (value) => {
        setPhone(value)
    }
    const SignUp = (value) => {
        console.log("User Credentials")
        console.log("NAME     : ", name)
        console.log("PASSWORD : ", password)
        console.log("EMAIL    : ", email)
        console.log("PHONE    : ", phone)
    }
    return (
        <Paper sx={{ p: 5, maxWidth: 350, margin: 'auto', marginTop: 20 }} elevation={3}>
            <Stack spacing={2}>
                <Typography variant="h6" component="h6">New Here? Welcome to Geeky Quiz! </Typography>
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => acceptName(event.target.value)} />
                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" onChange={(event) => acceptPassword(event.target.value)} />
                <TextField id="outlined-basic" label="Email" type="email" variant="outlined" onChange={(event) => acceptEmail(event.target.value)} />
                <TextField id="outlined-basic" label="Phone" type="phone" variant="outlined" onChange={(event) => acceptPhone(event.target.value)} />
                <Button1 variant="contained" onClick={() => SignUp()}>SIGN UP</Button1>
            </Stack>
        </Paper>
    )
}