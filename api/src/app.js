const express = requiere('express');
const app = express();

app.use(express.json());
app.use(express.urlencod({extends:false}));
app.use(requiere('./controllers/authControllers'));

module.exports = app;