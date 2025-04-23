const express = require('express');
const db = require('./config');
const AdminRouter = require('./routes/Admin');
const app = express();
const cors = require("cors")
const PORT = 6548;

app.use(cors())
app.use(express.json())
// Routes
app.use("/",AdminRouter);

app.get('/', (req, res) => {
  
  res.send('Hello, Express!');
});


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});