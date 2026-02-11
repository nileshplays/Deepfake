import express from "express";
import cors from "cors";
import detectRoutes from "./routes/detectRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Main API route
app.use("/api/detect", detectRoutes);

app.listen(5000, () => {
  console.log("Node.js API running on port 5000");
});
