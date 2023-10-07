"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
//import routes
const clockRoutes_1 = __importDefault(require("./routes/clockRoutes"));
let app = (0, express_1.default)();
// Middleware setup
app.use(bodyParser.json());
app.use(morgan('combined'));
// Enable CORS for all routes
app.use(cors());
let port = 3000;
// Mount routes
app.use('/clock', clockRoutes_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/clock`);
});
