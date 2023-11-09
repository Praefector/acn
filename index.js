const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/convert", require("./routes/api/convert"));

app.listen(8000, () => console.log('ACN - Serveur démarré'));

