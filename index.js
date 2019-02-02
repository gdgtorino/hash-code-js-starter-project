#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');

const parseData = (fileContent) => fileContent
    .split('\n') // Splits by line separator
    .filter(line => line.length > 0) // Ignores empty lines
    .map(line => { // Extracts and converts data from each line
        const [text, firstNum, secondNum, thirdNum] = line.split(' '); // ES6 Array destructuring declaration
        return {
            text, // ES6's property value shorthand, same as `text: text,`
            firstNum: Number(firstNum), // Type conversion
            secondNum: Number(secondNum),
            thirdNum: Number(thirdNum),
        };
    });

const processData = (data) => data
    .map(item => {
        return {
            text: item.text,
            modulus: Math.hypot(item.firstNum, item.secondNum, item.thirdNum),
        };
    });

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

