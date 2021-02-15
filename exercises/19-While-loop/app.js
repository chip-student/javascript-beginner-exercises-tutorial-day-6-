
//fix this function:
function startCounting()
{
	var counter = 100;
	while(counter <= 100)
	{
        if (counter === 0){
            break;
        }
		counter --;
		console.log(counter);
	}
	
	return counter;
}

startCounting();