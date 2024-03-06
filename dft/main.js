const Complex = require('./complex');
const DFT = require('./dft');

const inputSignal = [new Complex(1, 0), new Complex(2, 0), new Complex(3, 0), new Complex(4, 0)];
const outputSignal = DFT.transform(inputSignal);
console.log(outputSignal);