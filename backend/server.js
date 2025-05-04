import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

connectCloudinary();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors());

// ✅ CORS configuration
const allowedOrigins = [
  "http://localhost:5173", // local frontend dev
  "http://localhost:5174", // local admin dev (optional)
  "https://doctor-appointment-booking-system-gamma.vercel.app", // deployed frontend
  "https://doctor-appointment-booking-system-xrmt.vercel.app", // deployed admin dashboard (if any)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed from this origin"));
      }
    },
    credentials: true,
  })
);

// api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is working Great!");
});

app.listen(port, () => {
  console.log(`Server is running successfully at PORT ${port}`);
});
