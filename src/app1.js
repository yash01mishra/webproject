const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 8000;

// const st = path.join(__dirname, '../public/css/style.css')
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../tempelates/views');
const partial_path = path.join(__dirname, '../tempelates/partials');
console.log(templatePath);
console.log(staticPath)
app.set('view engine', 'hbs');
app.use(express.static(staticPath));
hbs.registerPartials(partial_path);

// app.set('view engine', 'hbs');
app.set('views', templatePath);

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})