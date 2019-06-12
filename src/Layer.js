
class Layer {

	constructor(numUnits, numInputs, activation) {
		this.units = Array.from({ length: numUnits },
			() => new Unit(numInputs, activation))
	}

	compute(input) {
		return this.units.map(unit => unit.compute(input))
	}

}