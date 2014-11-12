var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var InstructionSchema   = new Schema({
	customer_id:  	String, 
	animal: 				String,
	weight: 				String,
	price: 					Number,
	created:      	String,
	completed:    	Boolean,
	forms: 					Array,
	products:       Array,
});

module.exports = mongoose.model('Instruction', InstructionSchema);