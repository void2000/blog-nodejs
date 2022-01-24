const path = require('path')
const express = require('express')
var morgan = require('morgan')
const handlebars  = require('express-handlebars')
const app = express()

// Trả về dường dẫn thư mục gốc của thư mục public
app.use(express.static(path.join(__dirname,'public')))

// middleware
app.use(express.urlencoded(
  {
    extended: true
  }
))
app.use(express.json())


// show log
app.use(morgan('combined'))

//xử lý view engine
app.engine('hbs',handlebars.engine({
  extname:'.hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resource','views'))

const port = 3000

const route = require('./router')

//connect to db
const db = require('./config/db')
db.connect();

//Router init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})