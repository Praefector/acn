const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// Middleware pour parser le JSON dans le corps de la requête
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("<html><head>Server Response</head><body><h1>ACN - API de Conversion sous NodeJS</h1><p>Projet 2 - Exploration de Nouvelles Technologies</p></body>");
});

    //Conversion Températures

    // Celsius vers Fahrenheit
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    // Fahrenheit vers Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    // Réponse conversion de Celsius vers Fahrenheit
    app.post('/celsiusToFahrenheit', (req, res) => {
        const { celsius } = req.body;

        if (celsius === undefined || typeof celsius === 'string') {
            return res.status(400).json({ error: 'Veuillez fournir une valeur en Celsius valide dans le corps de la requête.' });
        }

        const fahrenheit = celsiusToFahrenheit(celsius);
        res.json({ celsius, fahrenheit });
    });

    // Réponse conversion de Fahrenheit vers Celsius
    app.post('/fahrenheitToCelsius', (req, res) => {
        const { fahrenheit } = req.body;

        if (fahrenheit === undefined || typeof fahrenheit === 'string') {
            return res.status(400).json({ error: 'Veuillez fournir une valeur en Fahrenheit valide dans le corps de la requête.' });
        }

        const celsius = fahrenheitToCelsius(fahrenheit);
        res.json({ fahrenheit, celsius });
    });

    //Conversion Longueurs

    // Mètres vers pieds
    function meterToFeet(meter) {
        return (meter * 3.281);
    }

    // Pieds vers mètres
    function feetToMeter(feet) {
        return (feet/3.281);
    }

    // Réponse conversion de mètres vers pieds
    app.post('/meterToFeet', (req, res) => {
        const { meter } = req.body;

        if (meter === undefined || typeof meter === 'string') {
            return res.status(400).json({ error: 'Veuillez fournir une valeur en metres valide dans le corps de la requête.' });
        }

        const feet = meterToFeet(meter);
        res.json({ meter, feet });
    });

    // Réponse conversion de pieds vers mètres
    app.post('/feetToMeter', (req, res) => {
        const { feet } = req.body;

        if (feet === undefined || typeof feet === 'string') {
            return res.status(400).json({ error: 'Veuillez fournir une valeur en pieds valide dans le corps de la requête.' });
        }

        const meter = feetToMeter(feet);
        res.json({ feet, meter });
    });

    //Conversion Poids

    // Kilogrammes vers livres 
    function kgToLbs(kg) {
        return (kg * 2.205);
    }

    // Livres vers kilogrammes
    function lbsToKg(lbs) {
        return (lbs/2.205);
    }

    // Réponse conversion de kilogrammes vers livres
    app.post('/kgToLbs', (req, res) => {
        const { kg } = req.body;

        if (kg === undefined || typeof kg === 'string') {
            return res.status(400).json({ error: 'Veuillez fournir une valeur en kilogrammes valide dans le corps de la requête.' });
        }

        const lbs = kgToLbs(kg);
        res.json({ kg, lbs });
    });

    // Réponse conversion de livres vers kilogrammes
    app.post('/lbsToKg', (req, res) => {
        const { lbs } = req.body;

        if (lbs === undefined || typeof lbs === 'string') {
            return res.status(400).json({ error: 'Veuillez fournir une valeur en livres valide dans le corps de la requête.' });
        }

        const kg = lbsToKg(lbs);
        res.json({ lbs, kg });
    });

    //Conversion Volumes

    // litres vers gallons
    function literToGallon(liter) {
        return (liter/3.785);
    }

    // Gallons vers litres 
    function gallonToLiter(gallon) {
        return (gallon * 3.785);
    }

    // Réponse conversion de litres vers gallons
    app.post('/literToGallon', (req, res) => {
        const { liter } = req.body;

        if (liter === undefined || typeof liter === 'string') {
            return res.status(400).json({ error: 'Veuillez fournir une valeur en litres valide dans le corps de la requête.' });
        }

        const gallon = literToGallon(liter);
        res.json({ liter, gallon });
    });

    // Réponse conversion de livres vers kilogrammes
    app.post('/gallonToLiter', (req, res) => {
        const { gallon } = req.body;

        if (gallon === undefined || typeof gallon === 'string') {
            return res.status(400).json({ error: 'Veuillez fournir une valeur en gallons valide dans le corps de la requête.' });
        }

        const liter = gallonToLiter(gallon);
        res.json({ gallon, liter });
    });

    //Conversion Devises

    // Dollars canadiens vers Yen (Monnaie Japonaise)
    function CADTOYEN(cad) {
        return (cad * 109.79);
    }

    // Yen vers dollars canadiens
    function YENTOCAD(yen) {
        return (yen / 109.79);
    }

    // Réponse conversion de CAD vers YEN
    app.post('/CADTOYEN', (req, res) => {
        const { CAD } = req.body;

        if (CAD === undefined || typeof CAD === 'string') {
            return res.status(400).json({ error: 'Veuillez fournir une valeur en CAD valide dans le corps de la requête.' });
        }

        const YEN = CADTOYEN(CAD);
        res.json({ CAD, YEN });
    });

    // Réponse conversion de YEN vers CAD
    app.post('/YENTOCAD', (req, res) => {
        const { YEN } = req.body;

        if (YEN === undefined || typeof YEN === 'string') {
            return res.status(400).json({ error: 'Veuillez fournir une valeur en YEN valide dans le corps de la requête.' });
        }

        const CAD = YENTOCAD(YEN);
        res.json({ YEN, CAD });
    });

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});