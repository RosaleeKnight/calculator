class Calculator {
    constructor(previousOperationTextElement, currentOperationTextElement) {
        this.previousOperationTextElement = previousOperationTextElement
        this.currentOperationTextElement = currentOperationTextElement
        this.clear ()
    }
}
clear () {
    this.currentOperation = ''
    this.previousOperation = ''
    this.operation = undefined
}
delete() {
    this.currentOperation = this.currentOperation.toString().slice(0,-1)
}
appendNumber(number) {
    if (number === '.' && this.currentOperation.includes('.')) return
    this.currentOperation = this.currentOperation.toString() + number.toString ()
}
chooseOperation(operation) {
    if (this.currentOperation === '') return
    if (this.previousOperation !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousOperation = this.currentOperation
    this.currentOperation = ''
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperationTextElement = document.querySelector('[data-previous-operation]')
const currentOperationTextElement = document.querySelector('[data-current-operation')

const calculator = new Calculator(previousOperationTextElement, currentOperationTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})