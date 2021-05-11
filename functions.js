
export function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomNumberList(min,max,length){
  let value = []
  for(let i = 0; i<length; i++){
    let randomNum = getRandomNumber(min,max)
    value.push(randomNum)
  }
  return value
}