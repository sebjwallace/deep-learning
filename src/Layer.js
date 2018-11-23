
module.exports = class Layer {

    constructor(numCells,numInputs,activation){
        this.weights = Array.from({length:numCells},
                () => Array.from({length:numInputs},Math.random))
        this.biases = Array.from({length:numCells},Math.random)
        this.activation = activation
    }

    compute(input){
        return this.weights.map(
            cell => cell.reduce(
                (sum,weight,i) => sum + this.activation(weight * input[i] + this.biases[i]),
                0
            )
        )
    }

}