var a = prompt("Ingrese el primer numero")
var b = prompt("Ingrese el segundo numero")
var c = prompt("Ingrese el tercer numero")

if (a == b && a == c) 
{
 document.writeln("Son iguales todos")    
}
else if (a > b && a > c) 
{
    document.writeln(a + "Es el mayor")
}

else if (b > a && b > c) 
{
    document.writeln(b + "Es el mayor")
}

else if (c > a && c > b) 
{
    document.writeln(c + "Es el mayor")
}   
