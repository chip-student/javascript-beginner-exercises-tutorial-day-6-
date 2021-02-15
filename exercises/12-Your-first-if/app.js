var total = prompt('How many km are left to go?');

// Your code below:

if (parseInt(total) > 50 && parseInt(total) <= 100){//If there are more than 50 km, but less or equal to 100 km
    console.log('We will be there in 5 minutes');
}else if(parseInt(total) <= 50){ //If there are less than or equal to 50 km
    console.log('I am parking. I will see you right now');
}
else{ //If there are more than 100 km left to go
    console.log('We still have a bit of driving left to go');
    
}
