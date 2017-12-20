var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/Student.js');
var Subject = require('../models/Subject.js');

/* GET ALL STUDENTS */
router.get('/', function(req, res, next) {
  Student.find(function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

/* GET SINGLE STUDENT BY ID */
router.get('/:id', function(req, res, next) {
  Student.findById(req.params.id).populate('asignaturas').exec(function(err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

/* SAVE STUDENT */
router.post('/', function(req, res, next) {
  Student.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE STUDENT */
router.put('/:id', function(req, res, next) {
  Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE STUDENT */
router.delete('/:id', function(req, res, next) {
  Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET STUDENTS THAT THERE ARE NOT IN A SUBJECT */
router.get('/not_in/:idsubject', function(req, res, next) {
  Subject.findById(req.params.idsubject, 'estudiantes -_id').exec(function(err, result) {
    if (err) return next(err);
    console.log(result.estudiantes);
    Student.find({ "_id": { "$nin": result.estudiantes}}, function (err, result) {
      if (err) return next(err);
      res.json(result);
    });
  });

});

module.exports = router;
