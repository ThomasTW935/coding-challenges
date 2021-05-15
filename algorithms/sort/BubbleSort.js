import { getRandomNumberList, swapNumbers} from '../../functions.js'

let list = getRandomNumberList(1,1000,200)

function BubbleSort(list){
  for(let i = 0; i<list.length; i++){
    for(let j = 0; j<list.length; j++){
      if(list[j] > list[j+1]){
        let temp = list[j]
        list[j] = list[j+1]
        list[j+1] = temp
      }
    }
  }
  return list
}
console.time()
console.log(BubbleSort(list))
console.timeEnd()