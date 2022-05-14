const express = require('express');
const app = express();
// const port = 8000;
const port = process.env.PORT || 3000
const path = require('path');
const hbs = require('hbs');

// app.get(route, callback)
console.log(path.join(__dirname, '../public'));

const static_path = path.join(__dirname, '../public');
app.use(express.static(static_path));


app.get('', (req, res) => {
    res.send("welcome to coding++ channel");
})

app.get('/about', (req, res) => {
    res.send("welcome to coding++ channel about channel");
})

app.get('/weather', (req, res) => {
    res.send("welcome to coding++ channel weather channel");
})

app.get('*', (req, res) => {
    res.send("404 error page not found");
})

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})