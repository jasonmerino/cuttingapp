var foul = {
	pricePerPound: 1.3,
	minPrice: 130,
	customer_id: '',
  animal: '',
  weight: '',
  price: '',
  created: '',
  completed: '',
	forms: [{
		name: 'Backstraps',
		templateUrl: 'checkbox',
		model: '',
		values: [
			'Chops',
			'Roasts',
			'Grind'
			]
		},{
			name: 'Tenerloins',
			templateUrl: 'radio',
			model: '',
			values: [
				'Yes',
				'No',
				'Missing',
				'Could not be saved'
			]
		},{
			name: 'Steaks',
			templateUrl: 'checkbox',
			model: '',
			values: [
				'Tenderized',
				'Regular',
				'Roasts',
				'Grind'
			]
		},{
			name: 'Stew',
			templateUrl: 'radio',
			model: '',
			values: [
				'Yes',
				'No'
			]
		},{
			name: 'Trim',
			templateUrl: 'radio',
			model: '',
			values: [
				'Add Beef Fat',
				'Add Prok Fat',
				'No Fat',
				'Don\'t Grind'
			]
		},{
			name: 'Notes',
			templateUrl: 'textarea',
			model: ''
		}]
	}