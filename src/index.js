const path = require("path")
const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');
 
//connect to DB
db.connect();


const app = express()
const port = 3000
//http  logger
//app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//template engine
app.engine('hbs',engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resource','views'))

//route init 
route(app);
app.listen(port, () => {
  console.log(`App app listening on port ${port}`)
})