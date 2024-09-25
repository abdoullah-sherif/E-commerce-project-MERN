import express from "express";
import mongoose from "mongoose";
import userRouter from"./routes/userRoute";
const app = express();
const PORT = process.env.PORT || 3001 ;
app.use(express.json());

mongoose.set("strictQuery", false);
const mongoDB = 'mongodb+srv://cooluser:J$nEd6&eSMmD3hY@cluster0.7feyr.mongodb.net/E-commerseDB?retryWrites=true&w=majority&appName=Cluster0';
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("connected")
}

app.use("/user",userRouter)


app.listen(PORT,()=>{
    console.log("app is running on "+PORT);
})