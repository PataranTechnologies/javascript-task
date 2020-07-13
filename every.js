var arr=[1,2,3,"Rahul",'Singh'];

function validateNumber(num)
{
return typeof num =="number";
}


function printResult()
{
console.log(arr.every(validateNumber)); //if all the element pass the validation then only it return true else false;
}


printResult();


