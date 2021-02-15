// Your code here:

let cadena1 = "@p bottles of milk on the wall, @p bottles of milk. Take one down and pass it around, @l bottles of milk on the wall.";

let cadena2 = "@p bottle of milk on the wall, @p bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.";

let cadena3 = "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, @y bottles of milk on the wall.";

for (var i = 99; i > 97; i--) {
    let valor1 = cadena1.replace(/@p/g, i).replace(/@l/g, i - 1);
    console.log(valor1);

    if (i === 98) {
        let valor2 = cadena2.replace(/@p/g, i - (i - 1));
        console.log(valor2);

        let valor3 = cadena3.replace(/@y/g, i + 1);
        console.log(valor3);
    }


}


