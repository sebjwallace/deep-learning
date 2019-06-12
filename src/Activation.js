
class Activation {

    static IDENTITY(x){
        return x
    }

    static BINARY(x){
        return x > 0.5 ? 1 : 0
    }

    static BIPOLAR(x){
        return x > 0 ? 1 : -1
    }

    static SIGMOID(x){
        return 1 / (1 + Math.pow(Math.E, -x))
    }

}