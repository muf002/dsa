const quickSort = (numbers: number[], left: number, right: number) => {
  if(left>=right) return

  const pivot = partition(numbers, left, right)

  quickSort(numbers, left, pivot-1)
  quickSort(numbers, pivot+1,right)  
}

const partition = (numbers: number[], left: number, right: number) => {
  const pivot = numbers[right]
  let idx = left-1

  for(let i=left; i<right; i++) {
    if(numbers[i]<pivot) {
      idx++
      const temp = numbers[i]
      numbers[i] = numbers[idx]
      numbers[idx] = temp
    }
  }

  idx++
  numbers[right] = numbers[idx]
  numbers[idx] = pivot

  return idx
}

const qSmain = (numbers: number[]) => {
  const left = 0
  const right = numbers.length - 1
  quickSort(numbers, left, right)
  return numbers
}

console.log(qSmain([1]))