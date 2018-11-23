
module.exports = class Activation {

    static IDENTITY(val){
        return val
    }

    static BINARY(val){
        return val > 0.5 ? 1 : 0
    }

    static BIPOLAR(val){
        return val > 0 ? 1 : -1
    }

}