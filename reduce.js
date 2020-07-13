var arr=[-2,45,10,2,4,-20];

function sum(t,num)
{
return t+num;
}


var sum=arr.reduce(sum); // t will start with 0 and for each element t+num is executed to find final sum
console.log(sum);
console.log(arr);
