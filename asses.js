
//Write a function that takes in a string and returns it when reversed
//let food = “eating”

let food = "eating";

let foods = food.reverse("eating");
console.log(foods);



//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23

function dividedArray(num){
    if(num.length<1){
        return num;
    }
     let middle =Math.floor(num.length/2);
    let left = num.slice(0,middle);
    let right = num.slice(middle);
    return sortedArray (dividedArray(left),divided(right));

    
    }
    function sortedArray(left,right){
        emptyArray=[];
        while(left.length && right.length){
            if(left[0]<right[0]){
                emptyArray.push(left.shift());
            }
            else{
                emptyArray.push(right.shift());
            }
        }
        return [...emptyArray,...left,...right];
    }
    let num = [2,8,0,23,5,45,76];
    console.log(dividedArray(num));

    function binarySearch(num1,target){
        let left = 0;
        let right = num1.length-1;
        while(left<=right){
            middle = Math.floor((left+right)/2);
            if(num[middle]=== target){
                return middle;
            }
            else if(num[middle]> target){
                right = middle-1;
            }
            else{
                left = middle+1;
            }

        }
        return null;

           }
    
    let num1 = [0,2,5,8,23,45,76];
    let target = 23;
    console.log(binarySearch(num1,target))



//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

let years = ""


//
//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
function numbers(arrays){
    let i =0;
    mutliply = 1;
    if(let = 1; i<arrays.length;i++){
        console.log(mutliply*=arrays[i])
    }

    }
    numz = [2,3,4,5,6,8];
    numbers(numz);

    //Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

function takesString(array){
    let nums = [“10”,”24”,”45”,”56”,”67”];

}

// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let i= 0;
number= 100
for(i in number %3 && 5){
    console.log("FizzBuzz");
    
}
for(i in number %5){
    console.log("Buzz");

}
for (i in number %3){
    console.log("Fizz")
}






}
