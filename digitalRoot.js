//a digital root is the recursive sum of all digits in a number, given n ,  take the sum of the digits  of n,
//if that value has two digits, continue reducing  until a single digit number is produced,
//this is only applicable to natural numbers 

const digitalRoot = function(num){

for(let i = num; i>9;i--) {
  num = num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b))
}

  return num
}

