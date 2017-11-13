var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new mongoose.Schema({
  nombre:  {type: String, required: true},
  apellido: {type: String, required: true},
  edad: {type: Number, required: true},
  genero:    { type: String},
  asignaturas: [{type: Schema.Types.ObjectId, ref: 'Subject'}]
});

module.exports = mongoose.model('Student', StudentSchema);
