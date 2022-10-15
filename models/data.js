const readline = require('readline')
const fs = require('fs')
const csv = require('csv-parser')
const csvWriter = require('csv-writer');
const path = require('path')

const toUpperCase = () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.question('what text do you want to convert to uppercasee ? ', function (text) {
		console.log(`Changed to = ${text.toUpperCase()} `);
		rl.close();
	});
}

const alternate = () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	function swapCase(text) {
		return text.split('').map((c, i) =>
			i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
		).join('');
	}
	rl.question('what text do you want to convert to alternate upper and lower text ? ', function (text) {

		console.log(`Changed to = ${swapCase(text)} `);
		rl.close();
	});
}

const stringCSV = () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.question('input text string to csv file?', function (text) {
		const dataArray = text.split("").map(data => (
			{ name: data }
		))


		const writer = csvWriter.createObjectCsvWriter({
			path: path.resolve(__dirname, `../files/data.csv`),
			header: [
				{ id: 'name', title: 'name' }
			]
		});


		writer.writeRecords(dataArray).then(() => {
			console.log('CSV Created!');
		});



		rl.close();
	});
}


module.exports = { toUpperCase, alternate, stringCSV }