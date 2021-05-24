const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const { left } = require('inquirer/lib/utils/readline')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Unit converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [
        {leftValue: leftValue},{leftUnit: leftUnit},{rightValue: rightValue},{rightUnit: rightUnit}
    ]
}

function inputForm(model){
    const {leftValue} = model
    const message = "temperature value to convert?"
    return inquirer.prompt([
        { 
            name: 'leftValue',
            type: 'leftValue',
            message: message,
            default: leftValue

        }
    ])
}

function listForm(model){
    const {input} = model
    const {leftUnit} = model
    const {rightUnit} = model
    const message2 = "from?"
    const message3 = "to?"
    const choices = ['yes', 'no']
    const choices2 = ["Fahrenheit","celcius","kelvin"]
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    },{
        name: "leftUnit",
        type: "list",
        message: message2,
        default: leftUnit,
        choices: choices2
    },{
        name: "rightUnit",
        type: "list",
        message: message3,
        default: rightUnit,
        choices: choices2
    })
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
    listForm
}