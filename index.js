#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const {parseData, processData} = require('./data-processing');

// Commander.js program configuration
program.version('0.0.1')
    .arguments('<inputFile> <outputFile>') // Require file names as cmd arguments
    .action((inputFile, outputFile) => {
        if (!inputFile || !outputFile) {
            throw new Error('Input and output files are required');
        }
        let inputFileContent;
        try {
            inputFileContent = fs.readFileSync(inputFile, 'UTF-8');
        } catch (error) {
            console.error('Could not open input file, check its path');
            throw error;
        }

        // Parse data
        const data = parseData(inputFileContent);

        // Process data
        const result = processData(data);

        // Format result for output
        const formattedResult = result
            .map(item => `${item.text}: ${item.modulus}`) // ES6 template literals
            .join('\n');

        // Write output to file
        fs.writeFileSync(outputFile, formattedResult);
    })
    .parse(process.argv);

