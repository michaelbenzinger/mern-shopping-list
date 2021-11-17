const express = require('express');
const mongoose = require('mongoose');
const itemsRouter = require('./routes/api/items');

const app = express();

// Body parser
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Use routes
app.use('/api/items', itemsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
