const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { ObjectId } = require('mongodb');

const app = express();
const port = 1234;

mongoose.connect('mongodb+srv://ecomm:XhjNTAUlhz95nekA@ecomm.8d9ysfj.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
}).then(() => console.log('MongoDB Connected')).catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));

const db = mongoose.connection.useDb('ecomm');
const loginSchema = new mongoose.Schema({
  _id: ObjectId,
  email: String,
  password: String
}, { versionKey: false });

const Login = db.model('logins', loginSchema, 'logins');

app.post('/logins', async (req, res) => {
  try {
    console.log('Accessed /logins route');

    const logins = await Login.find({}, 'email password');
    console.log('Retrieved logins:', logins);

    const loginDetails = logins.map(login => ({ email: login.email, password: login.password }));

    res.json(loginDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
