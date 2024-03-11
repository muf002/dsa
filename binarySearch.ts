const search = (numbers: number[], num: number) => {
  let left = 0
  let right = numbers.length - 1
  let index = binarySearchIter(numbers, left, right, num) 
  return index
}

//Iteratice Approach
const binarySearchIter = (numbers: number[], left, right, num) => {
  while(left<=right) {
    const mid = Math.floor((right + left)/2)
    if (numbers[mid] === num) {
      return mid;
    } else if (numbers[mid] > num) {
      right = mid - 1
    } else if (numbers[mid] < num) {
      left = mid + 1
    }
  }
  return -1
}

//Recursive Approach
const binarySearchRecur = (numbers: number[], left, right, num) => {
  if(left>right){
    return -1
  }
  const mid = Math.floor((right + left)/2)
  if(numbers[mid] === num) {
    return mid
  }else if(numbers[mid] > num) {
    return binarySearchRecur(numbers, left, mid - 1, num)
  }else if(numbers[mid] < num) {
    return binarySearchRecur(numbers, mid + 1, right, num)
  }
}

console.log(search([1,2,3,4,5,6,7], 1))
console.log(search([1,2,3,4,5,6,7], 2))
console.log(search([1,2,3,4,5,6,7], 3))
console.log(search([1,2,3,4,5,6,7], 4))
console.log(search([1,2,3,4,5,6,7], 6))
console.log(search([1,2,3,4,5,6,7], 5))
console.log(search([1,2,3,4,5,6,7], 9))
