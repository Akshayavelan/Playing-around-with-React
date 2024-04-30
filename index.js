import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Paper, Typography } from '@mui/material';
import { LoginForm } from './LoginForm';
// import { SignUp } from './SignUp';
import { Quiz } from './Quiz';
import { GeekyQuiz } from './GeekyQuiz';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  // {
  //   path: "/signup",
  //   element: <SignUp />,
  // },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/home",
    element: <GeekyQuiz />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box sx={{ background: "#e9f2eb", width: "100%",height: "100vh", overflow:"hidden"}}>
      <Paper sx={{ maxWidth: 600, margin: "auto", height: "100vh", overflow:"scroll"}} elevation={1}>
        <Paper sx={{ width: "100%", height: 50, background: "#aed581", margin: 'auto'}} elevation={1} >
          <Typography variant='h6' sx={{ textAlign: "center", color: "#114f21", p: 1}}>Geeky Quiz</Typography>
        </Paper>
        <Box>
          <RouterProvider router={router} />
        </Box>
      </Paper>
    </Box>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
