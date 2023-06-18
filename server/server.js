const express = require("express");
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());

const dbURI =
  "mongodb+srv://ecomm:XhjNTAUlhz95nekA@ecomm.8d9ysfj.mongodb.net/eCommerce";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server started on port ${port}`))
  )
  .catch((err) => console.error(err));
// const db = mongoose.connection.useDb("ecomm");

app.use(
  cors({
    origin: ["http://localhost:4200"],
    methods: ["GET", "POST"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "Origin",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Methods",
    ],
    credentials: true,
  })
);
app.use(authRoutes);

/*
const loginSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  { versionKey: false }
  );
  
  const Login = db.model("logins", loginSchema, "logins");
  
  app.post("/logins", async (req, res) => {
    try {
      console.log("Accessed /logins route");

    const logins = await Login.find({}, "email password");
    console.log("Retrieved logins:", logins);

    const loginDetails = logins.map((login) => ({
      email: login.email,
      password: login.password,
    }));

    res.json(loginDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
*/
