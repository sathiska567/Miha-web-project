import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/bd.js";

import authRoutes from "./routes/authRout.js";
import blogRoutes from "./routes/blogRout.js";
import ImageRoutes from './routes/ImageRoute.js';

import path from 'path';

import cors from 'cors';

// configure env
dotenv.config();

// rest object
const app = express();

// database config
connectDb();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// static file access
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// routes
app.use("/api/vi/auth", authRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/images", ImageRoutes);

// rest api
app.get("/", async (req, res) => {
  res.send({
    message: "Welcome to the MERN stack project",
  });
});

// PORT
const port = process.env.PORT || 8080;

// run listen
app.listen(port, () => {
  console.log(`Server running in ${process.env.DEV_MODE} mode on port ${port}`);
});
