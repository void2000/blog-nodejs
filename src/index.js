const path = require('path')
const express = require('express')
var morgan = require('morgan')
const handlebars  = require('express-handlebars')
const app = express()

app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('combined'))

app.engine('hbs',handlebars.engine({
  extname:'.hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resource/views'))



const port = 3000

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})