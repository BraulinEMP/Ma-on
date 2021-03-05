function Mayorque(algo,que,nose) 
{
    let algo = parseInt(prompt("Primer numero"));

    let que = parseInt(prompt("Segundo numero"));

    let nose = parseInt(prompt("Tercero numero"));

    u = Math.max(algo,que,nose);
    return u;
}
Mayorque();
document.writeln(u);