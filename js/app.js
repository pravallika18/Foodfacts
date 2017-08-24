/* CSV to JSON Conversion */
function csvJSON(Year) {
		const readline = require('readline');
		const fs = require('fs');
		let countries = [];
		let sugar = [];
		let salt = [];
		let i = 0;
		let tempData = {};
		let op = [];
		let obj = {};

		const rl = readline.createInterface({
		input: fs.createReadStream('./inputdata/FoodFacts.csv')
		});
        // Fetching Require columns fron CSV file using readLine
		rl.on('line', function(line) {
			let row = line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
			if(row[33] === 'Netherlands' || row[33] === 'Canada' ||
				row[33] === 'United States' || row[33] === 'France' ||
				row[33] === 'Germany' || row[33] === 'Spain' ||
				row[33] === 'South Africa' || row[33] === 'Australia')
				{
					countries[i] = row[33];
					sugar[i] = row[102];
					salt[i] = row[116];
					tempData['countries'] = countries[i];
					tempData['sugar'] = sugar[i];
					tempData['salt'] = salt[i];
					op.push(tempData);
					tempData = {};
					i = i + 1;
				}
			});
		rl.on('close', function() {
			obj = {};
            let encoding = 'utf8';
			let n1 = 0;
			let m1 = 0;
			let n2 = 0;
			let m2 = 0;
			let n3 = 0;
			let m3 = 0;
			let n4 = 0;
			let m4 = 0;
			let n5 = 0;
			let m5 = 0;
			let n6 = 0;
			let m6 = 0;
			let n7 = 0;
			let m7 = 0;
			let n8 = 0;
			let m8 = 0;
			op.map(function(x) {
				if(x.countries === 'Canada') {
					if(x.sugar !== '') {
						n1 = n1 + parseFloat(x.sugar);
					}
					if(x.salt !== '') {
						m1 = m1 + parseFloat(x.salt);
					}
				}
				if(x.countries === 'Netherlands') {
					if(x.sugar !== '') {
						n2 = n2 + parseFloat(x.sugar);
					}
					if(x.salt !== '') {
						m2 = m2 + parseFloat(x.salt);
					}
				}
				if(x.countries === 'United States') {
					if(x.sugar !== '') {
						n3 = n3 + parseFloat(x.sugar);
					}
					if(x.salt !== '') {
						m3 = m3 + parseFloat(x.salt);
					}
				}
				if(x.countries === 'France') {
					if(x.sugar !== '') {
						n4 = n4 + parseFloat(x.sugar);
					}
					if(x.salt !== '') {
						m4 = m4 + parseFloat(x.salt);
					}
				}
				if(x.countries === 'Germany') {
					if(x.sugar !== '') {
						n5 = n5 + parseFloat(x.sugar);
					}
					if(x.salt !== '') {
						m5 = m5 + parseFloat(x.salt);
					}
				}
				if(x.countries === 'Spain') {
					if(x.sugar !== '') {
						n6 = n6 + parseFloat(x.sugar);
					}
					if(x.salt !== '') {
						m6 = m6 + parseFloat(x.salt);
					}
				}
				if(x.countries === 'South Africa') {
					if(x.sugar !== '') {
						n7 = n7 + parseFloat(x.sugar);
					}
					if(x.salt !== '') {
						m7 = m7 + parseFloat(x.salt);
					}
				}
				if(x.countries === 'Australia') {
					if(x.sugar !== '') {
						n8 = n8 + parseFloat(x.sugar);
					}
					if(x.salt !== '') {
						m8 = m8 + parseFloat(x.salt);
					}
				}
			});
			obj = [{ country: 'canada', sugar: n1, salt: m1},
			{ country: 'Netherlands', sugar: n2, salt: m2},
			{ country: 'United States', sugar: n3, salt: m3},
			{ country: 'France', sugar: n4, salt: m4},
			{ country: 'Germany', sugar: n5, salt: m5},
			{ country: 'Spain', sugar: n6, salt: m6},
			{ country: 'South Africa', sugar: n7, salt: m7},
			{ country: 'Australia', sugar: n8, salt: m8}];
			let jsondata = JSON.stringify(obj);
			// Creating json file with required data
			fs.writeFileSync('./outputdata/Foodfacts_Pravallika.json', jsondata, encoding);
		});
		if(isNaN(Year)) {
			throw new Error('Not a number');
		}
	return 'JSON written successfully';
  }
module.exports = csvJSON;
