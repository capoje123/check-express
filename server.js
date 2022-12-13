const express = require('express')
const timer = require('./mdl/timer')
const app = express()
const port = 5000

app.use(express.static("./static"))
app.use(timer)



app.get('/', (req, res) => res.sendFile(`${__dirname}/static/Home.html`))
app.get('/contact', (req, res) => res.sendFile(`${__dirname}/static/Contact.html`))
app.get('/services', (req, res) => res.sendFile(`${__dirname}/static/Services.html`))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))