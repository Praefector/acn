const express = require("express");
const router = express.Router();

// BASE DE DONNÉE
//let dbConversion = require("../../db");

router.get("/", (req, res) => {
    res.send("<html><head>Server Response</head><body><h1>ACN - API de Conversion sous NodeJS</h1><p>Projet 2 - Exploration de Nouvelles Technologies</p></body>");
});

router.get("/convert1", (req, res) => {
    const meterValue = parseFloat(req.body.meter);

    // Check if the meter value is valid
    if (isNaN(meterValue)) {
      return res.status(400).json({ error: 'Invalid meter value' });
    }
  
    // Convert meters to inches (1 meter = 39.3701 inches)
    const inchValue = meterValue * 39.3701;
  
    // Return the result as JSON
    res.json({ meter: meterValue, inch: inchValue });
});

router.get("/convert2", (req, res) => {

});

router.get("/convert3", (req, res) => {

});

router.get("/convert4", (req, res) => {

});

router.get("/convert5", (req, res) => {

});



module.exports = router;