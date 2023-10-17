function demo(a=10, b=10, c=2)
{
    var x = a*b;
    var y = x/c;

    console.log(y);
}
demo();
demo(200);
demo(150, 30);
demo(20, 40, 10);