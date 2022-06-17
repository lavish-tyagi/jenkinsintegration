const express = require('express')
const app = express()
  
const port = process.env.PORT || 3333;
  
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
  
// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
  
app.get('/', function(req, res){
    res.send("server running")
})
  
app.listen(port, function(error){
    if(error) throw error
    console.log(`Server running Successfully on port => ${port}`);
})
