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

module.exports = {
    parseData,
    processData,
};
