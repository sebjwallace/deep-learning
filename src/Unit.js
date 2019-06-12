
class Unit {

	constructor(numInputs, activation) {
    const rand = () => (Math.random() - 0.5) * 2
		this.weights = Array.from({ length: numInputs }, rand)
		this.bias = rand()
		this.activation = activation
	}

	compute(input) {
		return this.weights.reduce(
      (sum, weight, i) => sum + this.activation((weight * input[i]) + this.bias), 0
    )
	}

}