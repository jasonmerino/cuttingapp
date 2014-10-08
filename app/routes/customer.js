var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');

router.route('/customers')
	.post(function(req, res){

		var customer = new Customer();
		customer.first_name 		= req.body.first_name,
		customer.last_name 			= req.body.last_name,
		customer.first_name 		= req.body.first_name,
		customer.home_phone 		= req.body.home_phone,
		customer.cell_phone 		= req.body.cell_phone,
		customer.email 					= req.body.email,
		customer.street 				= req.body.street,
		customer.street_cont	 	= req.body.street_cont,
		customer.city 					= req.body.city,
		customer.state 					= req.body.state,
		customer.zip 						= req.body.zip;

		customer.save(function (err){
			if (err)
				res.send(err);

			Customer.find(function(err, customers){
				if (err)
					res.send(err)

				res.json(customers);
			});

		});
	})

	.get(function(req, res){
		Customer.find(function(err, customers) {
			if (err) 
				res.send(err);

			res.json(customers);
		});
	});

router.route('/customers/:customer_id')
		.get(function(req, res){
			Customer.findById(req.params.customer_id, function(err, customer) {
				console.log(req.params.customer_id);
				if (err)
					res.send(err);
				res.json(customer);
			});
		})
		.put(function(req, res){			

			Customer.findById(req.params.customer_id, function(err, customer){
				if(err)
					res.send(err);

					customer.first_name 		= req.body.first_name,
					customer.last_name 			= req.body.last_name,
					customer.first_name 		= req.body.first_name,
					customer.home_phone 		= req.body.home_phone,
					customer.cell_phone 		= req.body.cell_phone,
					customer.email 					= req.body.email,
					customer.street 				= req.body.street,
					customer.street_cont	 	= req.body.street_cont,
					customer.city 					= req.body.city,
					customer.state 					= req.body.state,
					customer.zip 						= req.body.zip;

				customer.save(function(err, customer){
					if(err)
						res.send(err);
					res.json(customer);
				});
			});
		})
		.delete(function(req, res){
			Customer.remove({
				_id: req.params.customer_id
			}, function(err, customer){
				if(err)
					res.send(err);
				res.json({ message: 'Successfully Deleted'});
			});
		});

module.exports = router;