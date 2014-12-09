var beef = {
	pricePerPound: 1.3,
	minPrice: 130,
	customer_id: '',
  animal: '',
  weight: '',
  price: '',
  created: '',
  completed: '',
	forms: [{
			name: 'Portion',
			templateUrl: 'radio',
			model: '',
			values: [
				'Whole',
				'Half',
				'Third',
				'Quarter'
			]
		},{
			name: 'Steaks',
			templateUrl: 'thickness-number',
			model: '',
		},{
			name: 'Roasts',
			templateUrl: 'radio',
			model: '',
			values: [
				'3lb',
				'4lb',
				'5lb',
				'None'
			]
		},{
			name: 'Cross Rib',
			templateUrl: 'checkbox',
			model: '',
			values: [
				'Steaks',
				'Roasts',
				'Grint'							
			]
		},{
			name: 'Chuck',
			templateUrl: 'checkbox',
			model: '',
			values: [
				'Steaks',
				'Roasts'
			]
		},{
			name: 'Bone',
			templateUrl: 'checkbox',
			model: '',
			values: [
				'Roasts',
				'Grind'
			]
		},{
			name: 'Rib',
			templateUrl: 'radio',
			model: '',
			values: [
				'Steaks',
				'Grind'
			]
		},{
			name: 'Short Rib',
			templateUrl: 'radio',
			model: '',
			values: [
				'Yes',
				'No'
			]
		},{
			name: 'Soup Bones',
			templateUrl: 'radio',
			model: '',
			values: [
				'Yes',
				'No'
			]
		},{
			name: 'Brisket',
			templateUrl: 'checkbox',
			model: '',
			values: [
				'Flat Cut',
				'Corned',
				'Grind'
			]
		},{
			name: 'Stew Meat',
			templateUrl: 'amount-number',
			model: '',
			values: [
			]
		},{
			name: 'Flank Steaks',
			templateUrl: 'checkbox',
			model: '',
			values: [
				'Regular',
				'Tenderized',
				'Grind'
			]
		},{
			name: 'Sirlion Tip',
			templateUrl: 'checkbox',
			model: '',
			values: [
				'Steaks',
				'Roasts',
				'Carne Asada',
				'Grind'
			]
		},{
			name: 'Rump Roast',
			templateUrl: 'radio',
			model: '',
			values: [
				'Yes',
				'No'
			]
		},{
			name: 'Top Round',
			templateUrl: 'checkbox',
			model: '',
			values: [
				'Tenderized Steaks',
				'Regular Steaks',
				'Roasts',
				'London Broils',
				'Carne Asada',
				'Grind'
			]
		},{
			name: 'Bottom Round',
			templateUrl: 'checkbox',
			model: '',
			values: [
				'Tenderized Steaks',
				'Regular Steaks',
				'Roasts'
			]
		},{
			name: 'Ground Meat',
			templateUrl: 'checkbox',
			model: '',
			values: [
				'Regular',
				'Lean',
				'Extra Lean'
			]
		},{
			name: 'Notes',
			templateUrl: 'textarea',
			model: '',
			values: []
		}]
	}