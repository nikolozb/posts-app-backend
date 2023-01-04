import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5001;
const DB_URI = `mongodb+srv://admin:admin@cluster0.tkfxel7.mongodb.net/?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log(`server works on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
