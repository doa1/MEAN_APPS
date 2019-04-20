let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:32017/employeedb', { useNewUrlParser: true });
var EmployeeSchema = new mongoose.Schema({
    name: String,
    department: String,
    position: String,
    salary: String
});

var Employees = mongoose.model('Employee', EmployeeSchema);
module.exports = Employees;
// export a method for the data retrieval as well:: not being consumed currently
module.exports.getEmployees = function(callback) {
    // Employees.find(callback);
    //console.log("Connected to the schema")s
    Employees.find((err, res) => {
        if (err) throw err;
        console.log('Checking... ' + res)
	return res;
    })

}
