// PS1.P1
// string --> array --> sort array --> back to string
const sortString = (str) => ([...str].sort()).join('')
console.log(`Test case 1: ${sortString('my name is umang, desai!!')}`)
console.log(`Test case 2: ${sortString('supercalifragilisticexpialidocious')}`)


