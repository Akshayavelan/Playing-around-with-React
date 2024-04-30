import { Box, Button, ButtonGroup, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, Typography } from "@mui/material"
import React, { useState } from "react"
import { quizData } from "./data"
import { useNavigate } from "react-router-dom"

export const Quiz = () => {
    const [data, setData] = useState(quizData)
    const [question, setQuestion] = useState(data[0])
    const [isSubmitted, setisSubmitted] = useState(false)
    const navigate = useNavigate();   //react hooks

    //Answers method to select answers

    const Answers = (qid, ans) => {
        const updatedData = data.map(elem => {
            if (elem.questionId === qid) {
                return {
                    ...elem,
                    userAnswer: ans
                }
            }
            return elem
        })
        setData(updatedData)
        setQuestion(updatedData.find(event => event.questionId === question.questionId))
    }


    //first, prev, next, last
    const first = () => {
        setQuestion(data[0])
    }
    const last = () => {
        setQuestion(data[data.length - 1])
    }
    const next = () => {
        const nextQuestion = data.find(each => each.questionId === question.questionId + 1)
        setQuestion(nextQuestion)
    }
    const prev = () => {
        const prevQuestion = data.find(each => each.questionId === question.questionId - 1)
        setQuestion(prevQuestion)
    }
    //Main Quiz Form
    const displayQuiz = () => {
        return (
            <Box component="section" sx={{ p: 5, maxWidth: 350, margin: 'auto', marginTop: 10, height: '100vh' }}>
                <Stack spacing={5}>
                    <Typography variant="h3" gutterBottom sx={{ color: "#b80b2b" }}>Quiz Questions</Typography>
                    <FormControl>
                        <FormLabel ><Typography variant="h5" color={'#0a0607'} gutterBottom >{`${question.questionId}) ${question.question}`}</Typography></FormLabel>
                        <RadioGroup onChange={(event) => Answers(question.questionId, event.target.value)} value={question?.userAnswer ?? null}>
                            <FormControlLabel value="a" control={<Radio />} label={<Typography variant="body2" gutterBottom>{question.a}</Typography>} />
                            <FormControlLabel value="b" control={<Radio />} label={<Typography variant="body2" gutterBottom>{question.b}</Typography>} />
                            <FormControlLabel value="c" control={<Radio />} label={<Typography variant="body2" gutterBottom>{question.c}</Typography>} />
                        </RadioGroup>
                    </FormControl>
                    <ButtonGroup variant="text" aria-label="Basic button group">
                        <Button onClick={() => { first() }}>first</Button>
                        <Button onClick={() => { prev() }} disabled={question.questionId === data[0].questionId}>prev</Button>
                        <Button onClick={() => { next() }} disabled={question.questionId === data[data.length - 1].questionId}>next</Button>
                        <Button onClick={() => { last() }}>last</Button>
                    </ButtonGroup>
                </Stack>
                <Grid container spacing={2} marginTop={5}>
                    <Grid item fullwidth xs={6}>
                        <Button variant="contained" fullWidth color="error" onClick={() => { navigate("/home") }}>EXIT</Button>
                    </Grid>
                    <Grid item fullwidth xs={6}>
                        <Button variant="contained" fullWidth width={10} color="success" onClick={() => { setisSubmitted(true) }}>SUBMIT</Button>
                    </Grid>
                </Grid>
            </Box>

        )
    }
    const displayResult = () => {
        return (
            <Box component="section" sx={{ maxWidth: 350, margin: 'auto', marginTop: 2 }}>
                <Stack spacing={3}>
                    <Typography variant="h3" gutterBottom sx={{ color: "#b80b2b" }}>Your Result</Typography>
                    {
                        data.map(event => {
                            return (

                                <Box>
                                    <Typography variant="h5" color={'#0a0607'} gutterBottom >{`${event.questionId}) ${event.question}`}</Typography>
                                    <Grid container spacing={2}>
                                        <Grid item fullwidth xs={6}>
                                            <Typography variant="contained" color='#114f21'>{`Your Answer : ${event?.userAnswer ?? null}`}</Typography>
                                        </Grid>
                                        <Grid item fullwidth xs={6}>
                                            <Typography variant="contained" color='#114f21'>{`Correct Answer : ${event.answer}`}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )

                        }

                        )}
                    <Grid container >
                        <Grid item fullwidth xs={6}>
                            <Button variant="contained" fullWidth color="error" onClick={() => { navigate("/home") }}>EXIT</Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        )
    }

    return (
        <React.Fragment>
            {!isSubmitted && displayQuiz()}
            {isSubmitted && displayResult()}
        </React.Fragment>
    )

}

