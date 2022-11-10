import { Card, Paper } from '@material-ui/core';
import { Avatar, Box, Button, CssBaseline, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Learning = () => {
    const [dataSet, setDataSet] = useState([]);
    const [displayDate, setDisplayDate] = useState("");
    async function fetchData() {
        var response = await fetch("https://jsonplaceholder.typicode.com/todos");
        var data = await response.json();
        setDataSet(data);
        setDisplayDate(new Date().getUTCDay());
        console.log("hey!", displayDate)
    }
    function debounce(fun, delay) {
        let timer;
        return () => {
            let context = this;
            let args = arguments;
            clearTimeout(timer);

            timer = setTimeout(() => { fun.apply(context, args) }, delay);

        }

    }

    const x = debounce(fetchData, 5000);


    const theme = createTheme();

    return (
        <>



            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />

                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 46,
                                mx: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                border: "ThreeDShadow"
                            }}
                        >
                            <Button onClick={() => { x() }}> Add</Button>
                            <Typography> {displayDate}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
            {'Copyright © '}
            <Link color="inherit" href="https://www.shraddhashukla.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
        </>
    );
};

export default Learning;