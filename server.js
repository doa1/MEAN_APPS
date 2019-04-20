let express = require('express');
/*let mongoose = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost:32017/employeedb', (err, data) => {
    if (err) throw err;
    console.log('connected to db', data.databaseName)

});*/
let app = express();
//middleware setups
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes
let routes = require('./routes');
//make the api endpoints public
app.use(enableCors);
app.use('/api/employees/', routes);
// MY CUSTOMIZED CROSS-ORIGIN RESOURCE SHARING FN
function enableCors(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE,OPTIONS")
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-with,Content-Type,Accept');
    next();
}
app.listen(3001, function() {
    console.log("Listening ");
});
