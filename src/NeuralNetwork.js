
module.exports = class NeuralNetwork {

    constructor(shape){
        this.layers = shape.map(layer => new Layer(...layer))
    }

    compute(input){
        this.layers.forEach(layer => input = layer.compute(input))
        return input
    }

}