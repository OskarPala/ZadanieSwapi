const express = require('express');
const {filmsRouter} = require("./routes/films");
const hbs =require('express-handlebars')



const app= express();

app.engine('.hbs', hbs.engine({extname: '.hbs', }));
app.set('view engine','.hbs')


app.use(express.static('public'));
app.use('/', filmsRouter);


app.listen(3000, 'localhost');