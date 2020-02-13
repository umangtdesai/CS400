function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    }
}

function* fibsEven() {
    allFibs = fibs();
    while (true) {
        let val = allFibs.next().value;
        if (val % 2 == 0) {
            yield val;
        }
    }
}

evenFibNums = fibsEven()
let count = 6;
while (count --> 0) {
    console.log(evenFibNums.next().value)
}