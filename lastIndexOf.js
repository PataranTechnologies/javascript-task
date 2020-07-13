var arr=["Rahul","Singh",1,2,3,4,2,"Rahul",5];

//searching from last element is index not specified else start from that element and search from that index to 0 index.
console.log(arr.lastIndexOf("Rahul")); //7
console.log(arr.lastIndexOf(2)); //6

console.log(arr.lastIndexOf(1)); //2  
console.log(arr.lastIndexOf("RAHUL")); //-1 does not exist Case mismatch

console.log(arr.lastIndexOf("Rahul",4)); //0


