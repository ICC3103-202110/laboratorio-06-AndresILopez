const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const {input} = await listForm(model)
        const {leftValue} = await inputForm(model)
        const {leftUnit} = await listForm(model)
        const {rightUnit} = await listForm(model)
        const updatedModel = update(input, leftValue, leftUnit, rightUnit, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}