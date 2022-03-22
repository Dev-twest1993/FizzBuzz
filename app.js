//print numbers from 1 to 100
//multiples of 3 print Fizz
//multiples of 5 print Buzz
//multiples of both print FizzBuzz
//multiple conditions
//if else statements

let list = document.querySelector("#list")

for(x = 1; x <= 100; x++){

    if(x % 3 == 0 && x % 5 == 0){
        let new_number = document.createElement("li");
        new_number.innerHTML= "FizzBuzz";
        list.appendChild(new_number);
        
    }

    else if(x % 3 == 0){
        let new_number = document.createElement("li");
        new_number.innerHTML= "Fizz";
        list.appendChild(new_number);
    }

    else if(x % 5 == 0){
        let new_number = document.createElement("li");
        new_number.innerHTML= "Buzz";
        list.appendChild(new_number);
    }

    else{
        let new_number = document.createElement("li");
        new_number.innerHTML= x;
        list.appendChild(new_number);

    }
}
