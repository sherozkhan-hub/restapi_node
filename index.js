const express = require("express");
const { userRouter } = require("./routes/users.routes");
const app = express();
const port = 900;

// Add this line below the other require statements
const ejs = require("ejs");

// Set the view engine to EJS
app.set("view engine", "ejs");

app.use(express.json());
app.use("/users", userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
