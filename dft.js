const Complex = require('./complex');

class DFT {
    static transform(inputSignal){
        const N = inputSignal.length;
        const outputSignal = new Array(N);

        for (let k = 0; k < N; k++) {
            let sum = new Complex(0, 0);
            for (let n = 0; n < N; n++) {
                const angle = (2 * Math.PI * k * n) / N;
                const expPart = new Complex(Math.cos(angle), -Math.sin(angle));
                sum = sum.add(inputSignal[n].multiply(expPart));
            }
            outputSignal[k] = sum;
        }
        return outputSignal;
    }
}

module.exports = DFT;