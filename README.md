# ACN - Documentation de l'API

## Description et fonctionnement

API servant à effectuer des conversions de mesures de poids, longueur, température, devise et volume.

Toutes les requêtes de conversion s'attendent à recevoir ce type de requêtes :

```
Type REST - /route

Corps du message :

{
    "var" : "data"
}

Réponse du message :

{
    "reponse" : "rep"
}

Erreurs possibles :

400 - Veuillez fournir une valeur en X dans le corps de la requête.

```

Adresse de l'API : http://sheep.hopto.org:8000/


## Routes disponnibles

### GET - /

**Corps du message :** 

Aucun

**Réponse du message :**
```html
<html>
    <head>Server Response</head>
    <body>
        <h1>ACN - API de Conversion sous NodeJS</h1>
        <p>Projet 2 - Exploration de Nouvelles Technologies</p>
    </body>
<html>
```

**Erreurs possibles :**

### POST - /celsiusToFahrenheit

**Corps du message :** 

```json
{
    "celsius" : 10
}
```

**Réponse du message :**
```json
{
    "celsius" : 10,
    "fahrenheit" : 50
}
```

**Erreurs possibles :**

*400* - Veuillez fournir une valeur en Celsius valide dans le corps de la requête.

### POST - /fahrenheitToCelsius

**Corps du message :** 

```json
{
    "fahrenheit" : 50
}
```

**Réponse du message :**
```json
{
    "fahrenheit" : 50,
    "celsius" : 10
}
```

**Erreurs possibles :**

*400* - Veuillez fournir une valeur en Fahrenheit valide dans le corps de la requête.

### POST - /meterToFeet

**Corps du message :** 

```json
{
    "meter": 10
}
```

**Réponse du message :**
```json
{
    "meter": 10,
    "feet": 32.81
}
```

**Erreurs possibles :**

*400* - Veuillez fournir une valeur en metres valide dans le corps de la requête.

### POST - /feetToMeter

**Corps du message :** 

```json
{
    "feet": 32.81
}
```

**Réponse du message :**
```json
{
    "feet": 32.81,
    "meter": 10
}
```

**Erreurs possibles :**

*400* - Veuillez fournir une valeur en pieds valide dans le corps de la requête.

### POST - /kgToLbs

**Corps du message :** 

```json
{
    "kg": 10
}
```

**Réponse du message :**
```json
{
    "kg": 10,
    "lbs": 22.05
}
```

**Erreurs possibles :**

*400* - Veuillez fournir une valeur en kilogrammes valide dans le corps de la requête.

### POST - /lbsToKg

**Corps du message :** 

```json
{
    "lbs": 22.05
}
```

**Réponse du message :**
```json
{
    "lbs": 22.05,
    "kg": 10
}
```

**Erreurs possibles :**

*400* - Veuillez fournir une valeur en livres valide dans le corps de la requête.

### POST - /literToGallon

**Corps du message :** 

```json
{
  "liter": 10
}
```

**Réponse du message :**
```json
{
  "liter": 10,
  "gallon": 2.642007926023778
}
```

**Erreurs possibles :**

*400* - Veuillez fournir une valeur en litres valide dans le corps de la requête.

### POST - /gallonToLiter

**Corps du message :** 

```json
{
  "gallon": 2.642007926023778
}
```

**Réponse du message :**
```json
{ 
  "gallon": 2.642007926023778,
  "liter": 10
}
```

**Erreurs possibles :**

*400* - Veuillez fournir une valeur en gallons valide dans le corps de la requête.

### POST - /CADTOYEN

**Corps du message :** 

```json
{
  "CAD": 10
}
```

**Réponse du message :**
```json
{
  "CAD": 10,
  "YEN": 1097.9
}
```

**Erreurs possibles :**

*400* - Veuillez fournir une valeur en CAD valide dans le corps de la requête.

### POST - /YENTOCAD

**Corps du message :** 

```json
{
  "YEN": 1097.9
}
```

**Réponse du message :**
```json
{
  "YEN": 1097.9,
  "CAD": 10,
}
```

**Erreurs possibles :**

*400* - Veuillez fournir une valeur en YEN valide dans le corps de la requête.




