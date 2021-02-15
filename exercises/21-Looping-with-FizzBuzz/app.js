function fizzBuzz() {  
    // Your code here
    for(var i=1; i <= 100; i++)
    {
        let val_5 = i % 5;
        let val_3 = i % 3;

        if(val_5 === 0 && val_3 === 0)
        {
            console.log("FizzBuzz");
        }
        else if(val_5 === 0)
        {
            console.log("Buzz")
        }else if(val_3 === 0)
        {
            console.log("Fizz");
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz();