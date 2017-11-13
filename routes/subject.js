var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Subject = require('../models/Subject.js');
var Student = require('../models/Student.js');

/* GET ALL SUBJECTS */
router.get('/', function(req, res, next) {
  Subject.find(function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

router.get('/filter_nombre/:nombre', function(req, res, next) {
  Subject.find({"nombre" : req.params.nombre }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

router.get('/filter_estudios/:nombre', function(req, res, next) {
  Subject.find({"estudios" : req.params.nombre }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

router.get('/filter_cuatri/:nombre', function(req, res, next) {
  Subject.find({"cuatrimestre" : req.params.nombre }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

router.get('/sorted', function(req, res, next) {
  Subject.find({}, null, {sort: {nombre: 1 }}, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

/* GET SINGLE SUBJECT BY ID */
router.get('/:id', function(req, res, next) {
  Subject.findById(req.params.id).populate('estudiantes').exec(function(err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

/* SAVE SUBJECT */
router.post('/', function(req, res, next) {
  Subject.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE SUBJECT */
router.put('/:id', function(req, res, next) {
  Subject.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE SUBJECT */
router.delete('/:id', function(req, res, next) {
  Subject.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* ADD STUDENT TO A SUBJECT */
router.post('/:id/students/:idstudent', function (req, res, next) {
  Subject.update({ _id: req.params.id },
    {"$push": { "estudiantes" :  req.params.idstudent }},
    function (err, post) {
      if (err) return next(err);
      Student.update({_id: req.params.idstudent }, { "$push": { "asignaturas" : req.params.id }},
        function (err, post) {
          if (err) return next(err);
          res.json(post);
        });
    });
});

/* DELETE STUDENT FROM SUBJECT */
router.put('/:id/students/:idstudent', function (req, res, next) {
  Subject.update({ _id: req.params.id },
    {"$pull": { "estudiantes" :  req.params.idstudent }},
    function (err, post) {
    if (err) return next(err);
      Student.update({_id: req.params.idstudent }, { "$pull": { "asignaturas" : req.params.id }},
        function (err, post) {
          if (err) return next(err);
          res.json(post);
        });
  });
});

module.exports = router;
