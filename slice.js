var arr=["Rahul","Singh","1","2",3,4,5,5,67,67];


var lis=arr.slice(3,6); //created a new array from original arr and copy items from index 3 to (6-1)

console.log(arr);

console.log(lis);

lis[1]="pataran"; //to verify that list is new

console.log(arr);
console.log(lis);
