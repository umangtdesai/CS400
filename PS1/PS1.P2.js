//PS1.P2

const evaluate = expression => {
    switch (expression.charAt(1)) {
        case '+':
            return (exp) => parseInt(exp.charAt(0)) + parseInt(exp.charAt(2));
            break;
        case '-' :
            return (exp) => parseInt(exp.charAt(0)) - parseInt(exp.charAt(2));
            break;
        case '*' :
            return (exp) => parseInt(exp.charAt(0)) * parseInt(exp.charAt(2));
            break;
        // assuming that right is never 0
        case '/' :
            return (exp) => parseInt(exp.charAt(0)) / parseInt(exp.charAt(2));
            break;
        case '%' :
            return (exp) => parseInt(exp.charAt(0)) % parseInt(exp.charAt(2));
    }
}

const exp1 = '4+2';
let operator = evaluate(exp1);
//console.log(`${operator}`);
console.log(`${exp1} = ${operator(exp1)}`);

const exp2 = '5*7';
operator = evaluate(exp2);
//console.log(`${operator}`);
console.log(`${exp2} = ${operator(exp2)}`);

const exp3 = '6-1';
operator = evaluate(exp3);
//console.log(`${operator}`);
console.log(`${exp3} = ${operator(exp3)}`);

const exp4 = '9/2';
operator = evaluate(exp4);
//console.log(`${operator}`);
console.log(`${exp4} = ${operator(exp4)}`);
