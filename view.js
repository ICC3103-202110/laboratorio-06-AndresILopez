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
    const {input} = model
    const message = 'Left temperature is source?'
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            default: input,
            validate: function(value){
                if(value === 'yes' || value === 'no'){
                    return true
                } else {
                    return 'yes/no'
                }
            }
        }
    ])
}

function listForm(model){
    const {input} = model
    const message = 'Left temperature is source?'
    const choices = ['yes', 'no']
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
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