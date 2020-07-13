var arr=["Rahul","Singh","pataran",4,9];

function searchFirst(val)
{
return typeof val=="number";
}


function printResult()
{
console.log(arr.find(searchFirst)); //returning first true result element
}

printResult();
