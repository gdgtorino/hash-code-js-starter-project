# Hash Code Javascript Starter Project
## GDG Torino
##### Author: [Umberto Pepato](http://github.com/umbopepato)

This is a basic JavaScript starter project for Google's HashCode competition.

## Structure

`index.js` uses [Commander.js](https://github.com/tj/commander.js/) to parse command line input.

The `data-processing.js` module contains some example functions to parse and process input data that take advantage of
handy ES6 features such as destructuring declarations and new collection methods.

## Prerequisites

Be sure to have a relatively recent version of [nodejs](https://nodejs.org) and [npm](https://npmjs.org) set up.

## Install

Install the necessary dependencies with:

```bash
$ npm install
```

## Run

To start the project `cd` in the root folder and run:

```bash
$ node index.js <inputFile> <outputFile>
```

To test the example run:

```bash
$ node index.js data/exampleInput.txt <outputFile>
```

or

```bash
$ npm run test
```

## Command line alias

To create a command line alias for launching your program with a single keyword add a `bin` property in `package.json`
pointing to `index.js`:

```json
{
  ...
  "bin": {
    "hashcode": "./index.js"
  },
  ...
}
```

then run:

```bash
$ npm run link
```

Now you can launch you program with the `hashcode` alias:

```bash
$ hashcode <inputFile> <outpuFile>
```

![GDG Torino](https://lh3.googleusercontent.com/-thBiI0v5PDw/Vv1A_ip3jXI/AAAAAAAACG0/41EgiBEUg-ARAAoQDFIT0Cit0d8574RMA/w750-h750/gdg-logo%2Bhi-res.png)
