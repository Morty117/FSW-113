// declare each of the variables marked with "**" in the appropriate scope and using the appropriate type

// create an event listener that calls the curveGrade() function when the Curve It!! button is clicked

// create an event listener that resets the scores and grades to their defaults when the Reset button is clicked

function convertArray(obj) {
    ary = obj.value.split(',')
    ary = ary.map(function (x) {
        return parseInt(x)
    })
    return ary
}

// Condense the number of lines within the curveGrade() function as much as possible by converting 
// the functions to arrow functions. You can also condense the number of lines by combining some 
// separate lines of code into single lines. It currently has 18 lines of code. Without counting  
// empty lines, can you get the number of lines down to 8?

function curveGrades() {
    const aryGrades = convertArray(document.querySelector('#scores'));
    console.log(aryGrades, typeof aryGrades[0]);

    const sum = (accumulator, currentValue) => accumulator + currentValue;

    const sumGrades = array => array.reduce(sum);

    const mean = sumGrades(aryGrades) / aryGrades.length
    console.log(mean)

    const minGrade = aryGrades.reduce((a, b) => Math.min(a, b));
    
    const maxGrade = aryGrades.reduce((a, b) => Math.max(a, b));

    console.log(minGrade);
    console.log(maxGrade);
    
    const range = maxGrade - minGrade
    console.log(range);

    const gradeSlice = range / 5
    console.log(gradeSlice);

    aryGrades.forEach(applyBell);
    console.log(aryGrades);

    // write the value of aryGrades to the grades div in the HTML document
    document.getElementById('grades').append("\n", aryGrades);

    function applyBell(grade, index, ary) {
        switch (true) {
            case grade >= (mean + (gradeSlice * 2)): 
                ary[index] = 'A'
                break
            case grade >= (mean + gradeSlice): 
                ary[index] = 'B'
                break
            case grade >= (mean):
                ary[index] = 'C'
                break
            case grade >= (mean - gradeSlice): 
                ary[index] = 'D'
                break
            default:
                ary[index] = 'F'
                break
        }
    }
}

var wrapper = document.querySelector(".gradeWrapper")
console.log(wrapper)

function gradesReset() {
    document.querySelector("#grades").innerText = 'Curved Grades Show here';
}



document.getElementById('submit').addEventListener('click', curveGrades);
console.log(curveGrades);

document.getElementById('reset').addEventListener('click', gradesReset);
console.log(gradesReset);

