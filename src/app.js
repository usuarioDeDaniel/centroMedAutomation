import express from "express";
import "./spreadsheet.js";

const app = express();

//routes
import googleRoutes from "./routes/google.routes.js";
app.use(googleRoutes);

export default app;

