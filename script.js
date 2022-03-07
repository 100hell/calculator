var buttons = document.getElementsByTagName("button");
var display = document.getElementById("result");
var displayHistory = document.getElementById("history");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');

        if(value == "AC"){
            operand1 = 0;
            operand2 = null;
            operator = null;
            display.innerText = "";
            displayHistory.innerText = "";
        }
        else if(value == "+/-"){
            operand1 = parseFloat(display.textContent);
            operand1 *= -1;
            display.innerText = operand1;
        }
        else if(value == '+' || value == '-' || value == '*' || value == '/' || value == '%'){
            operator = value;
            operand1 = parseFloat(display.textContent);
            displayHistory.textContent = operand1 +" " + value;
            display.textContent = "";
        }
        else if(value == '='){
            operand2 = parseFloat(display.textContent);
            displayHistory.textContent +=  " " + operand2 + " =";
            var answer;
            if(operator == "+"){
                answer = eval(operand1) + eval(operand2);
            }
            if(operator == "-"){
                answer = eval(operand1) - eval(operand2);
            }
            if(operator == "*"){
                answer = eval(operand1) * eval(operand2);
            }
            if(operator == "/"){
                answer = eval(operand1) / eval(operand2);
            }
            if(operator == "%"){
                answer = eval(operand1) * (eval(operand2)/100);
            }

            display.innerText = answer;

        }
        else{
            display.innerText += value;
        }
            
    });
}