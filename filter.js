var arr=[1,"Rahul",2,3,"Singh","pataran",7,10];

function filterer(val)
{

return typeof val =="number";
}


function printResult()
{
console.log(arr.filter(filterer)); //filter method filters out all the number from the arr using filterer method.
}

printResult();
