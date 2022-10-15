#!/usr/bin/env node
const program = require('commander');
const { toUpperCase, alternate, stringCSV } = require('./models/data');

program
	.version('1.0.0')
	.description('Test SingaId');

program
	.command('touppercase')
	.description('converts the string to uppercase.')
	.action(function () {
		toUpperCase()
	})

	program
	.command('alternate')
	.description('converts the string to alternate upper and lower case.')
	.action(function (){
		alternate()
	})

	program
	.command('create')
	.description('creates a CSV file from the string by making each character a column in the CSV.')
	.action(function() {
		stringCSV()
	})

program.parse(process.argv)