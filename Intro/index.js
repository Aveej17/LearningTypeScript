var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
var numResults = [];
var textResults = [];
function add(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number')
        return num1 + num2;
    else if (typeof (num1) === 'string' && typeof (num2) === 'string')
        return num1 + " " + num2;
    else
        return +num1 + +num2;
}
function printResult(resultObj) {
    console.log("result : ", resultObj.val);
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    numResults.push(result);
    // console.log(result);
    var textResult = add(num1, num2);
    textResults.push(textResult);
    // console.log(add(true, false));
    printResult({ val: result, timeStamp: new Date() });
    console.log(numResults);
    console.log(textResults);
});
