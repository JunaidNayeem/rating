import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress, Paper, Container, Divider } from '@mui/material';
import { Form, Left } from './components';




function App() {

  return (
    <div div={{ width: "100%" }}>
      <Navbar />
      <Container fixed style={{ background: "#fff" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8} md={8}>
            <h1>My Movies</h1>
            <Left />
          </Grid>
          <Divider orientation="vertical" bold flexItem sx={{ mr: "-2px" }} />
          <Grid item xs={12} lg={4} md={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
