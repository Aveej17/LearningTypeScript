const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults :number [] = [];
const textResults : string [] = [];

function add (num1: number | string, num2 : number | String){

    if(typeof(num1)=== 'number' &&  typeof(num2)=== 'number')
        return num1 + num2;

    else if(typeof(num1)=== 'string' &&  typeof(num2)=== 'string')
        return num1+" "+num2;

    else
        return +num1 + +num2;


}

function printResult(resultObj : {val:number; timeStamp:Date}){
    console.log("result : ",resultObj.val);
    
}


buttonElement.addEventListener('click', ()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result as number);
    // console.log(result);
    const textResult = add(num1, num2);
    textResults.push(textResult as string)
    // console.log(add(true, false));
    printResult({val: result as number, timeStamp: new Date()});
    console.log(numResults);
    console.log(textResults);
    
    
    
});





