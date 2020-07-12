// Powers of Two
// Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.


function PowersofTwo(num) {
  //the given input is a number
  //output is a boolean

  //For a number to be power of two, it should nbe divisible by two
    //check if the number is greater than 2
    //if num === 2,
      //return true
    //else
      //call the function recursively over num / 2


  if(num < 2){ // base case
    return false;
  }else if(num === 2){ //edge case
    return true;
  }else{
    return PowersofTwo(num / 2);
  }

}