var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubjectSchema = new mongoose.Schema({
  nombre:  String,
  estudios: String,
  cuatrimestre: String,
  estudiantes: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Subject', SubjectSchema);
