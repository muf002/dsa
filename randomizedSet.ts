class RandomizedSet {
  map: Map<number, number>
  arr: number[]
  constructor() {
    this.map = new Map()
    this.arr = []
  }

  insert(val: number): boolean {
    if(this.map.has(val)){
      return false
    }
    this.map.set(val, this.arr.length)
    this.arr.push(val)
    return true
  }

  remove(val: number): boolean {
    if(!this.map.has(val)) {
      return false
    }
    let index = this.map.get(val)
    let lastElem = this.arr[this.arr.length-1]
    this.arr[this.arr.length-1] = val
    this.arr[index] = lastElem
    this.map.set(lastElem, index)
    this.arr.pop()
    this.map.delete(val)
    return true
  }

  getRandom():number {
    let randomIndex = Math.floor(Math.random() * this.arr.length)
    return this.arr[randomIndex]
  }
}

let random = new RandomizedSet()
console.log(random.insert(0))
console.log(random.insert(1))
console.log(random.remove(0))
console.log(random.insert(2))
console.log(random.remove(1))
console.log(random.getRandom())

