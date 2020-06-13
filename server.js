const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jefferson Pineda'
    });
});

//5.Hacemos que el server este pendiente e indicamos que purto utilizara
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});