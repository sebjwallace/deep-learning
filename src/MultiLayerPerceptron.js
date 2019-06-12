
class MultiLayerPerceptron {

    constructor(shape){
        this.layers = shape.map(layer => new Layer(...layer))
    }

    compute(input){
        return this.layers.map(layer => input = layer.compute(input))
    }

}