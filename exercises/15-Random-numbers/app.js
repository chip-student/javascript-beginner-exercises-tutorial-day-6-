/*Exercise closely resembles 11 - consider introducing another concept here? */

// function getRandomInt()
// {
// 	var randomNumber = Math.random();
// 	return randomNumber;
// }
function getRandomInt()
{
	var randomNumber = Math.floor(Math.random() * 11);
	return randomNumber;
}


console.log(getRandomInt());