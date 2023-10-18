import app from "./app";

const PORT: number = parseInt(process.env.PORT || "3002");

app.listen(PORT, () => {
  console.log("Server is running...");
  
})