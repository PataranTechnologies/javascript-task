var arr=["Rahul","Singh",1,2,3,"pataran"];

function checker(val)
{
return typeof val =="number";
}


console.log(arr.some(checker)); // print true if checker return true atlest once.
