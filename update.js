const FUNCTIONS = {
    'yes': leftSide=true,
    'no': leftSide=false
}


const ktoC = x => x-273

const ktoF = x => (x-273)*(9/5)+32

const ctoK = x => x+273

const ctoF = x => x*(9/5)+32

const ftoK = x => (x-32)/(9/5)+273

const ftoC = x => (x-32)/(9/5)

function update(input, leftValue, leftUnit, rightUnit, model){
    const {leftValue} = model
    const newValue = FUNCTIONS[input](leftValue)
    if (leftSide){
        const value = leftValue
    }
    else{
        const value = rightValue
    }
    return {
        ...model,
        leftValue: newValue,
        input: input
    }
}

module.exports = {
    update
}