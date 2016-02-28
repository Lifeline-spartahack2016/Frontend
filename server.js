
var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
app.use(express.static('app'));

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});
