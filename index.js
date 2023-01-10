const express = require('express');
const app = express();

const host = 8081;

//View engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(host, () => {
    console.log(`Server ON: http://localhost:${host}`)
})