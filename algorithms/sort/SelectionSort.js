import { getRandomNumberList, swapNumbers} from '../../functions.js'

let list = getRandomNumberList(1,100,10)

// 1 3 5 4 2
function SelectionSort(list){
  for(let i = 0; i<list.length; i++){
    let smallestIndex = i
    for(let j = i+1; j<list.length; j++){
      if(list[smallestIndex] > list[j]){
        smallestIndex = j
      }
    }
    let temp = list[i]
    list[i] = list[smallestIndex]
    list[smallestIndex] = temp

  }
  return list
}
console.time()
console.log(SelectionSort(list))
console.timeEnd()