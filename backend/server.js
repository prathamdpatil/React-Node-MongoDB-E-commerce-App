import express from 'express';
// const express = require('express');
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errormiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
import path from 'path';

import userRoutes from './Routes/useRoutes.js';
    //7030612346
connectDB();

    //utlZmsrUCsM2Qw9X
    //8LAyXcwXFFN6Nqqf

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use(cookieParser());

app.use('/api/users', userRoutes); 

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }

// app.get('/', (req, res) => res.send('server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`server stared on port ${port}`));

