var express = require('express');
var router = express.Router();
var Instruction = require('../models/instruction');

router.route('/instructions')
	.post(function(req, res){

		var instruction = new Instruction();

		console.log(req.body.forms);

		instruction.customer_id 	= 	req.body.customer_id;
		instruction.portion 			=		req.body.portion;
		instruction.split 				=   req.body.split;
		instruction.animal 				=		req.body.animal;
		instruction.weight				=		req.body.weight;
		instruction.price					= 	req.body.price;
		instruction.created				=		req.body.created;
		instruction.completed			=		req.body.completed;
		instruction.forms					= 	req.body.forms;
		instruction.products 			=   req.body.products;

		instruction.save(function (err){
			if (err)
				res.send(err);

			Instruction.find(function(err, instructions){
				if (err)
					res.send(err)

				res.json(instructions);
			});

		});
	})

	.get(function(req, res){
		Instruction.find(function(err, instructions) {
			if (err) 
				res.send(err);

			res.json(instructions);
		});
	});

router.route('/instructions/:instruction_id')
		.get(function(req, res){
			Instruction.findById(req.params.instruction_id, function(err, instruction) {
				console.log(req.params.instruction_id);
				if (err)
					res.send(err);
				res.json(instruction);
			});
		})
		.put(function(req, res){			

			Instruction.findById(req.params.instruction_id, function(err, instruction){
				if(err)
					res.send(err);

				instruction.save(function(err, instruction){
					if(err)
						res.send(err);
					res.json(instruction);
				});
			});
		})
		.delete(function(req, res){
			Instruction.remove({
				_id: req.params.instruction_id
			}, function(err, instruction){
				if(err)
					res.send(err);
				res.json({ message: 'Successfully Deleted'});
			});
		});

module.exports = router;