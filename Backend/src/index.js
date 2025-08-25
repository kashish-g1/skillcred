import app from "./app.js";
import { connectDB } from "./db/index.js";
import { config } from "dotenv";
config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on http://localhost:" + process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("🔴 Failed to connect to MongoDB!", err);
    process.exit(1);
  });
