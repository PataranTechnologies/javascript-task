var arr=[1,5,34,2,56,6,3,5,23,2];

function mapper(ele)
{
return  ele*ele-1;
}
var result=arr.map(mapper);  // this method is creating a new arra using the result of mapper function

console.log(result);// [0,24,1155,3,3135,35...etc] 
