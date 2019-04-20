let express = require('express');
var router = express.Router();
var employeeModel = require('./model');
var mongoose = require('mongoose')
router.get('/', (req, res, next) => {
    employeeModel.find().then(result => {
        res.json(result);
    }, error => {
        throw error;
    })

});
//get single employee
router.get('/:id', (req, res, next) => {
        id = req.params.id;
        console.log(id);
        employeeModel.findById({ _id: id }, function(error, data) {
            if (error) throw error;
            console.log("RESULT", data)
            res.status(200).json(data)
        });
    })
    // add new employee
router.post('/create/', (req, res, next) => {
    console.log(req.body)
    var mydata = req.body;
    employeeModel.insertMany(mydata, function(err, result) {
        if (err) throw err;
        res.status(200).json(result);
    });
});
router.put('/update/:id', (req, res, next) => {
    var empId = req.params.id;
    var updatedRecord = req.body;
    employeeModel.update({ _id: empId }, { $set: updatedRecord }).then(result => {
        res.status(200).json({ message: 'success', result });
    }, error => { throw error })
});
router.delete('/delete/:id', (req, res, next) => {
    var deleteId = req.params.id;
    employeeModel.deleteOne({ _id: deleteId }, function(error, result) {
        if (error) throw error;
        res.status(200).json({ message: 'deleted', result });
    })
})
module.exports = router;
