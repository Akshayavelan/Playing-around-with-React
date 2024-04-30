import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const GeekyQuiz = () => {
    const navigate=useNavigate();
    const Button2 = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#aed581'),
        backgroundColor: '#e9f2eb',
        '&:hover': {
            backgroundColor: '#aed581',
        },
    }));
    return (
        <Box component="section" sx={{ p: 5, maxWidth: 350, margin: 'auto', marginTop: 20 }}>
            <Stack>
                <Typography variant="h2" gutterBottom sx={{ color: "#114f21" }}>Welcome Geeks!</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Want to check your general knowledge skills?
                </Typography>
                <Grid item fullwidth xs={6} marginTop={5}>
                    <Button2 variant="outlined" onClick={()=>{navigate("/quiz")}}>Get Started</Button2>
                </Grid>
            </Stack>
        </Box>
    )
}