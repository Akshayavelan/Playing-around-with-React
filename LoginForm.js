import { Button, Paper, Stack, TextField, Typography, styled } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [name1, setName] = useState(null)
    const [password1, setPassword] = useState(null)
    const navigate = useNavigate();
    //button Style
    const Button1 = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#114f21'),
        backgroundColor: '#aed581',
        '&:hover': {
            backgroundColor: '#114f21',
        },
    }));
    const acceptUser = (value) => {
        setName(value)
    }
    const acceptUserPassword = (value) => {
        setPassword(value)
    }
    const Login = () => {
        console.log("NAME     : ", name1)
        console.log("PASSWORD : ", password1)
        console.log("Logged in")
        navigate("/home");
        // if (name1 === "Akshaya" && password1 === "Akjp2002")
        //     return true
        // else
        //     return (
        //     <Typography variant="h4">User does not exist, Log in failed</Typography>
        // )

    }

    return (
        <Paper sx={{ p: 5, maxWidth: 350, margin: 'auto', marginTop: 20 }} elevation={3}>
            <Stack spacing={2}>
                <Typography variant="h6" component="h6">Hi, enter your credentials!</Typography>
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(event) => acceptUser(event.target.value)} />
                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" onChange={(event) => acceptUserPassword(event.target.value)} />
                <Button1 variant="contained" onClick={() => Login()}>LOG IN</Button1>
            </Stack>
        </Paper>
    )
}
