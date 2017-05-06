var fs = require('fs');
var express = require('express')
var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))

app.get('/currentstat', function (req, res) {
	try {  
    var data = fs.readFileSync('currentstat.txt').toString().split("\\n")
	
    console.log(data);
	 

    
} catch(e) {
    console.log('Error:', e.stack);
}
  	
 res.render('index',{ data : data })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
