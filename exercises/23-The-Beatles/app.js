

//Your code above ^^^
function sing(){
    const PARTE1 = "let it be";
    const PARTE2 = "words of wisdom";
    const PARTE3 = "there will be an answer, ";
    let concatenar = PARTE1;
    
    for(var i=1; i < 4; i++)
    {
        concatenar = concatenar + ", " + PARTE1;
    }
    concatenar = concatenar + ", " + PARTE2;
    for(var i=0; i < 5; i++)
    {
        concatenar = concatenar + ", " + PARTE1;
    }
    concatenar = concatenar + ", " + PARTE3 + PARTE1;
    
    return concatenar;

}

console.log(sing());