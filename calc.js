const buttonNumber = document.getElementsByName('number');
const buttonOperador = document.getElementsByName('operador')
const buttonEqual = document.getElementsByName('equal') [0];
const buttonDelete = document.getElementsByName('delete') [0];


var result = document.getElementById('result');
var operadorActual = '';
var operadorAnterior = '';
var accionOperador = undefined;

buttonNumber.forEach(function (numberCalc) {
    numberCalc.addEventListener('click', function () {
        
        addNumber(numberCalc.innerText);
              
    })
})

buttonOperador.forEach(function (operador) {
    
    operador.addEventListener('click', function(){
        selectOperador(operador.innerText);
       
    })
})

buttonEqual.addEventListener('click', function(){
    calculate();
    actualizarDisplay();
})

buttonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
})

function addNumber(numero){
    operadorActual = operadorActual.toString() + numero.toString();
    actualizarDisplay();
}

function selectOperador(operar){
    if(operadorActual === '') return;
    if(operadorAnterior !== ''){
        calculate();
    }

    operacion = operar.toString();
    operadorAnterior = operadorActual;
    operadorActual = '';
}

function calculate(){

    var calculo;
    const anterior = parseFloat(operadorAnterior);
    const actual = parseFloat(operadorActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '÷':
            calculo = anterior / actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        default:
            return;
    }
    operadorActual = calculo;
    operacion = undefined;
    operadorAnterior = '';
}

function actualizarDisplay(){
    result.value = operadorActual;
}

function clear(){
    operadorActual = '';
    operadorAnterior = '';
    accionOperador = undefined;
}