// let totalMarks = prompt("Enter total marks");
// let marksObtained = prompt("Enter marks obtained");
// let result = marksObtained * 100 / totalMarks;
// alert(result + "%");
function calculate() {
    let totalMarks = document.querySelector("#totalMarks").value
    let marksObtained = document.querySelector("#marksObtained").value

    // totalMarks = +totalMarks;
    // totalMarks = parseInt(totalMarks);
    // totalMarks = parseFloat(totalMarks);
    totalMarks = Number(totalMarks)
    marksObtained = Number(marksObtained)
    // "460" * "10"
    // "460" + "10" > "46010"
    let result = marksObtained *100 / totalMarks;
    // document.querySelector("#result").innerHTML = "you have got " + result + "%"; //es5
    document.querySelector("#result").innerHTML = `you have got ${result}%;`//es6 string templating
}
