"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Define routes
router.get('/', (req, res) => {
    let currentDate = new Date().getTime() / 1000;
    let dateString = currentDate.toString();
    // Handle GET request
    //res.json(responseData);
    res.send(dateString);
});
exports.default = router;
