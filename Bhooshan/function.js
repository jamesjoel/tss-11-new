function demo(a=10,b=10,c=4)
{
    // var a=10;
    // var b=20;
    // var c=2;
    var x=a*b;
    var y=x/c;
    var data=[x,y];

    return data;
}
var ans=demo(20,10,2);
console.log(ans);
ans[0];
ans[1];
console.log(ans[0])
console.log(ans[1])