import express from 'express';
import cors = require("cors");
import bodyParser = require('body-parser');
import morgan = require("morgan");

//import routes
import clockRoutes from './routes/clockRoutes';

let app = express();
// Middleware setup
app.use(bodyParser.json());
app.use(morgan('combined'));
// Enable CORS for all routes
app.use(cors());

let port = 3000;

// Mount routes
app.use('/clock', clockRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/clock`);
});