
module.exports = class Layer {

    constructor(numCells,numInputs,activation){
        this.weights = Array.from({length:numCells},
                () => Array.from({length:numInputs},Math.random))
        this.biases = Array.from({length:numCells},Math.random)
        this.activation = activation
    }

    compute(input){
        return this.weights.map(
            (cell,i) => this.activation(cell.reduce(
                (sum,weight,j) => sum + (weight * input[j]),
                0
            )
        ))
    }

}