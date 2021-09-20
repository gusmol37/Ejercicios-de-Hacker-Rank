function plusMinus(arr) {
    let positive = arr.filter(number => number > 0).length / arr.length;
    let negative = arr.filter(number => number < 0).length / arr.length;;
    let zeronums = arr.filter(number => number == 0).length / arr.length;;
    return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))
}

const plusMinus = (arr) => {
    let posSum = 0;
    let negSum = 0
    let zeroes = 0
    arr.forEach(el => {
      if(el === 0){
        zeroes++
  
      } else if (el >= 1) {
        posSum++
  
      } else if (el < 0) {
        negSum++
        
      }
    })
      negSum /= arr.length
      posSum /= arr.length
      zeroes /= arr.length
      console.log(posSum)
      console.log(negSum)
      console.log(zeroes)
  }
  plusMinus([1,1,0,-1,-1])