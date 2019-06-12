
class Cost {

    static MSE(actual,expected){
        return actual.reduce((cost,v,i) => cost + ((v - expected[i]) ** 2)) / actual.length
    }

}