var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CustomerSchema   = new Schema({
	first_name: 	String,
	last_name: 		String,
	home_phone: 	String,
	cell_phone: 	String,
	email: 				String,
	street: 			String,
	street_cont: 	String,
	city: 				String,
	state: 				String,
	zip: 					String,
});

module.exports = mongoose.model('Customer', CustomerSchema);