Array.prototype.toUprCase=function(){
for(i=0;i<this.length;i++)
{
this[i]=this[i].toUpperCase();
}
};


var arr=["Rahul","Singh","pataran"];

arr.toUprCase();

console.log(arr);
