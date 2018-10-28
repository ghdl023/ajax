var express = require('express');
var app = express();
var host = "127.0.0.1";
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), host, function(){
  console.log('Server is running... port '+ app.get('port'));
});
