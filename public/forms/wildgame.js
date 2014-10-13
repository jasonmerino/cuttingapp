{
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
		model: 'backstraps',
		values: [
			'Chops',
			'Roasts',
			'Grind'
			]
		},{
			name: 'Tenderloins',
			templateUrl: 'radio',
			model: 'tenderloins',
			values: [
				'Yes',
				'No',
				'Missing',
				'Could not be saved'
			]
		},{
			name: 'Steaks',
			templateUrl: 'checkbox',
			model: 'steaks',
			values: [
				'Tenderized',
				'Regular',
				'Roasts',
				'Grind'
			]
		},{
			name: 'Stew',
			templateUrl: 'radio',
			model: 'stew',
			values: [
				'Yes',
				'No'
			]
		},{
			name: 'Trim',
			templateUrl: 'radio',
			model: 'trim',
			values: [
				'Add Beef Fat',
				'Add Prok Fat',
				'No Fat',
				'Don\'t Grind'
			]
		},{
			name: 'Notes',
			templateUrl: 'textarea',
			model: 'notes'
		}]
	}