
var arr=["Rahul","Singh","Pataran","Technology"];
console.log(arr);
arr.copyWithin(3,1); replace element at index 3 with element at index 1
console.log(arr);


var arr2=["Rahul","Singh","Pataran","Technology"];
arr2.copyWithin(2,0,2); //Target point is index 2 and every value fron 2 will get replaced by elements of index 0 to 2(second and third argument);
console.log(arr2);

