var forms = {
	
	// Antelope

		"Antelope": {
			minPrice: 130,
			pricePerPound: 1.3,

			sections: [{
				name: "Backstraps",
				forms: [{
						templateName: "checkbox",
						name: "Backstraps",
						id: "backstraps",
						model: "backstraps",
						values: [
							{	name:"Chops", value: "chops"},
							{ name:"Roast", value: "roats"},
							{ name: "Grind", value: "grind"}
						]
					}
				]
			},
			{ name: "Tenderloins",
				forms: [
					{
						templateName: "radio",
						name: "Tenderloins",
						id: "tenderlions",
						model: "tenerlions",
						values: [
							{	name: "Yes", 					value: "yes"},
							{ name: "No", 					value: "no"},
							{ name: "Grind", 				value: "grind"},
							{ name: "Not Saveable", 	value: "not saveable"}
						]
					}
				]
			},
			{ name: "Steaks",
				forms: [
					{
						templateName: "checkbox",
						name: "Steaks",
						id: "tenderized",
						model: "tenderized",
						values: [
							{ name: "Tenderized", value: "tenderized"},
							{	name: "Regular", value: "regular"}, 
							{ name: "Roasts", value: "roasts"}, 
							{ name: "Grind", value: "grind"}
						]
					}
				]
			},
			{ name: "Stew",
				forms: [
					{
						templateName: "select.weight",
						name: "Weight",
						id: "stew_weight",
						model: "stew_weight",
						values: [
							{ name: "Tenderized", value: "tenderized"},
							{	name: "Regular", value: "regular"}, 
							{ name: "Roasts", value: "roasts"}, 
							{ name: "Grind", value: "grind"}
						]
					},
					{
						templateName: "number",
						name: "Number",
						id: "stew_package",
						model: "stew_package",
						values: [
							{ name: "min", value: 0 },
							{ name: "max", value: 20 }
						]
					}
				]
			},
			{ name: "Trim",
				forms: [
					{
						templateName: "radio",
						name: "Trim",
						id: "trim",
						model: "trim",
						values: [
							{ name: "Beef Fat", value: "beef_fat"},
							{	name: "Pork Fat", value: "pork_fat"}, 
							{ name: "No Fat", value: "no_fat"}, 
							{ name: "No Grind", value: "no_grind"}
						]
					}
				]
			},
			{ name: "Notes",
				forms: [
					{
						templateName: "textarea",
						name: "Notes",
						id: "notes",
						model: "notes"
					}
				]
			}]
		},

		// Bear

		"Bear": {
			sections: [{
				name: "Backstraps",
				forms: [
					{
						templateName: "select",
						name: "Backstraps",
						id: "backstraps",
						model: "backstraps",
						values: [
							"Small", "Medium", "Extra Large"
						]
					},
					{
						templateName: "radio",
						name: "chops",
						id: "",
						model: "chops",
						values: [
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10
						]
					}
				]
			}]
		}

	}


var customers = [{ 
		name: 'Tom', 
    phone: '333.333.3333' 
  },
  { 
  	name: 'Dick', 
  	phone: '444.4444.4444' 
  },
  { 
  	name: 'Harry', 
  	phone: '555.555.5555'
  },
  { 
  	name: 'Sally', 
  	phone: '777.777.7777'
  }];


var animals = [{
		slug: ".hog",
		name: "Hog"
	},
	{
		slug: ".deer",
		name: "Deer"
	},
	{
		slug: "cutting_instructions.antelope",
		name: "Antelope"
	},
	{
		slug: ".wildhog",
		name: "Wild Hog"
	},
	{
		slug: ".bear",
		name: "Bear"
	},
	{
		slug: ".sheep",
		name: "Sheep"
	},
	{
		slug: ".buffalo",
		name: "Buffalo"
	},
	{
		slug: ".duckpheasantgoose",
		name: "Duck/Pheasant/Goose"
	},
	{
		slug: ".goat",
		name: "Goat"
	},
	{
		slug: ".lamb",
		name: "Lamb"
	},
	{
		slug: ".beef",
		name: "Beef"
	},
	{
		slug: ".oryx",
		name: "Oryx"
	},
	{
		slug: ".caribu",
		name: "Caribu"
	}
];

var hog = {
		color: 'blue'
	};

var lamb = {
	loin_chops_thickness: 	'3/4',
	loin_chops_number: 			'3',
	rib_chops: 							'chops',
	steaks_thickness: 			'1/2',
	steaks_number: 					'5',
	legs: 									'whole',
	ribs: 									'yes',
	riblets: 							'yes',
	shanks: 								'yes',
	stew: 									'yes',
	grind: 									'yes',
	notes: 									'This is a note'
};