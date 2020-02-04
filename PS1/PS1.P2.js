//PS1.P2

// need to change evaluate to:
/*
    doEval('8+2') -- should return a function --> left + right
    call should be

    doEval('8+2')('8+2')
 */

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
console.log(`${exp1} = ${evaluate(exp1)(exp1)}`);

const exp2 = '5*7';
console.log(`${exp2} = ${evaluate(exp2)(exp2)}`);

const exp3 = '6-1';
console.log(`${exp3} = ${evaluate(exp3)(exp3)}`);

const exp4 = '9/2';
console.log(`${exp4} = ${evaluate(exp4)(exp4)}`);

const exp5= '8/2';
console.log(`${exp5} = ${evaluate(exp5)(exp5)}`);