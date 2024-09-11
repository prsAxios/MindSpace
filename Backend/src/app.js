import express from 'express';  // Import express
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import stringSimilarity from 'string-similarity';
import dotenv from 'dotenv'; // Import dotenv package to load environment variables

dotenv.config();  // Load environment variables

import UserDataRoute from './routes/UserDataRoute.js'; // Import UserDataRoute.js functions
import UserLoginRoute from './routes/UserLoginRoute.js'; // Import UserLoginRoute.js functions
import userLocationRouter from "./routes/userLocationRouter.js";
import userAssessmentRouter from './routes/userAssessmentRouter.js';
import AdminAssessmentRouter from "./routes/AdminAssessmentRouter.js";
import initializeSocket from './Socket.js';
import DrAppointmentRouter from "./routes/DrAppointmentRouter.js";
import AiAssessmentRouter from "./routes/AiAssessmentRouter.js";
import connectDB from './db/index.js';

const Port = 3000; // Port number
const app = express(); // Create express app

app.use(express.static("public"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.use('/api', UserDataRoute); 
app.use('/api', UserLoginRoute);
app.use('/api', userAssessmentRouter);
app.use('/api', AdminAssessmentRouter);
app.use('/api', DrAppointmentRouter);
app.use('/api', AiAssessmentRouter);

const server = http.createServer(app); // Create a server using express app
const io = initializeSocket(server);

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// User routes
app.get('/user/profile', UserDataRoute);
app.get('/doctors/profile', UserDataRoute);
app.post('/user/profile', UserDataRoute);
app.patch('/user/profile/:id', UserDataRoute);
app.delete('/user/profile/:id', UserDataRoute);
app.put('/user/dr/id/save', UserDataRoute);
app.delete('/user/dr/id/delete', UserDataRoute);

// User login routes
app.post('/user/login', UserLoginRoute);

// Forgot password
app.post('/user/forgot-password', UserLoginRoute);

// Reset password
app.post('/user/reset-password', UserLoginRoute);

// Verify OTP
app.post('/user/verify-otp', UserLoginRoute);

// Location route
app.post('/location', userLocationRouter);

// User Assessment routes
app.post('/user/userAssessment/save', userAssessmentRouter);
app.get('/user/userAssessment/question', userAssessmentRouter);
app.post('/user/userAssessment/submit', userAssessmentRouter);

// Admin CRUD routes
app.get('/admin/assessment/get', AdminAssessmentRouter);
app.patch('/admin/assessment/update', AdminAssessmentRouter);
app.delete('/admin/assessment/delete', AdminAssessmentRouter);
app.put('/admin/assessment/putdata', AdminAssessmentRouter);

// DR appointment routes
app.get('/dr/appointment/details', DrAppointmentRouter);
app.post('/dr/req/save', DrAppointmentRouter);
app.put('/dr/req/acceptstatus', DrAppointmentRouter);
app.delete('/dr/appointment/delete', DrAppointmentRouter);

// AI assessment route
app.get('/ai/assessment/:token', AiAssessmentRouter);

const httpServer = server.listen(Port, () => console.log(`Server running on port: http://localhost:${Port}`)); // Start the server
