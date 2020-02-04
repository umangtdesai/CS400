//PS1.P3

const stringLambda = (str, cb) => cb(str);

// part a
// lambda function -- globally replace the c's with an addtional delimiter and then split on the delimiter
let test1 = stringLambda('supercalifragilisticexpialidocious', str => (str.replace(/c/g, ',c').split(',')));
console.log(test1)

// part b
// lambda function that creates and returns details of the string as required
let test2 = stringLambda(
        'supercalifragilisticexpialidocious',
        str => {
        //stringDeatials is the final obkect to be returned
        const stringDetails = {
            "originalString": str,
            "modifiedString": str.replace(/a/g, 'A'),
            "numberReplaced":str.match(/a/g).length,
            "length": str.length
        }
        return stringDetails
    }
)
console.log(test2)
