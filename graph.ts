class Graph {
  private adjacencyList: { vertex: number; weight: number }[][];

  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex: number): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: number, vertex2: number, weight): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    this.adjacencyList[vertex1].push({ vertex: vertex2, weight: weight });
  }

  printGraph(): void {
    this.adjacencyList.forEach((edges, index) => {
      const edgeList = edges
        .map((edge) => `${edge.vertex}(${edge.weight})`)
        .join(", ");
      console.log(`${index} -> ${edgeList}`);
    });
  }

  bfs(source: number, target: number): number[] {
    const len = this.adjacencyList.length;
    let seen = new Array(len).fill(false);
    let prev = new Array(len).fill(-1);
    let q: number[] = [source];

    seen[source] = true;

    while (q.length != 0) {
      let curr = q.shift();
      if (curr == target) {
        break;
      }

      let list = this.adjacencyList[curr];
      for (let i = 0; i < list.length; i++) {
        let node = list[i];
        if (seen[node.vertex]) continue;
        seen[node.vertex] = true;
        prev[node.vertex] = curr;
        q.push(node.vertex);
      }
    }

    let path = [];
    let curr = target;

    while (prev[curr] && prev[curr] != -1) {
      path.push(curr);
      curr = prev[curr];
    }
    return path.length ? [...path, source].reverse() : [];
  }

  dfs(source: number, target: number): number[] {
    const len = this.adjacencyList.length;
    let seen = new Array(len).fill(false);
    let path: number[] = [];

    this.walk(source, target, seen, path);
    return path;
  }

  walk(curr: number, target: number, seen, path: number[]): boolean {
    if (curr == target) {
      path.push(curr);
      return true;
    }

    if (seen[curr]) return false;

    seen[curr] = true;
    path.push(curr);

    let list = this.adjacencyList[curr];
    for (let i = 0; i < list.length; i++) {
      let node = list[i];
      let move = this.walk(node.vertex, target, seen, path);
      if (move) {
        return true;
      }
    }

    path.pop();
  }

  shortestPath(source: number, target: number): number[] {
    const len = this.adjacencyList.length;
    let seen = new Array(len).fill(false);
    let prev = new Array(len).fill(-1);
    let dis = new Array(len).fill(Infinity);
    dis[source] = 0;

    while (seen.some((s, i) => s == false && dis[i] != Infinity)) {
      const curr = this.minimumVisited(seen, dis);
      seen[curr] = true;
      const list = this.adjacencyList[curr];
      for (let i = 0; i < list.length; i++) {
        const node = list[i];
        if (seen[node.vertex]) continue;
        const distance = dis[curr] + node.weight
        if (distance < dis[node.vertex]) {
          dis[node.vertex] = distance 
          prev[node.vertex] = curr;
        }
      }
    }

    let curr = target;
    let out = [];
    while (prev[curr]!= null &&prev[curr] != -1) {
      out.push(curr);
      curr = prev[curr];
    }
    if (out.length) {
      return [source, ...out.reverse()];
    }
    return [];
  }

  minimumVisited(seen: number[], dis: number[]): number {
    let idx = -1;
    let minDis = Infinity;

    for (let i = 0; i < dis.length; i++) {
      if (seen[i]) continue;
      if (dis[i] < minDis) {
        minDis = dis[i];
        idx = i;
      }
    }
    return idx;
  }

  // shortestPath(source: number, target: number): number[] {
  //   let seen = new Array(this.adjacencyList.length).fill(false)
  //   let prev = new Array(this.adjacencyList.length).fill(-1)
  //   let dis = new Array(this.adjacencyList.length).fill(Infinity)
  //   dis[source] = 0
  //   while(seen.some((s, i) => s==false && dis[i]!=Infinity)){
  //     let curr = this.minimunUnvisited(seen, dis)
  //     seen[curr] = true
  //     let conn = this.adjacencyList[curr]
  //     for(let i=0; i<conn.length; i++) {
  //       if(seen[conn[i].vertex]) continue
  //       let distance = dis[curr] + conn[i].weight
  //       if (distance < dis[conn[i].vertex]) {
  //         dis[conn[i].vertex] = distance
  //         prev[conn[i].vertex] = curr;
  //       }
  //     }
  //   }

  //   let curr = target
  //   let out = []
  //   while(prev[curr] != -1){
  //     out.push(curr)
  //     curr = prev[curr]
  //   }
  //   if(out.length){
  //     return [source, ...out.reverse()]
  //   }
  //   return []
  // }

  // minimunUnvisited(seen: number[], dis: number[]): number {
  //   let idx = -1
  //   let lowestDistance = Infinity

  //   for(let i=0; i<dis.length; i++){
  //     if(seen[i]) continue
  //     if (dis[i] < lowestDistance) {
  //       lowestDistance = dis[i];
  //       idx = i;
  //     }
  //   }
  //   return idx
  // }
}

// Example usage:
const myGraph = new Graph();

myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);

myGraph.addEdge(0, 1, 1);
myGraph.addEdge(0, 2, 5);
myGraph.addEdge(0, 3, 5);
myGraph.addEdge(1, 3, 3);
myGraph.addEdge(1, 2, 7);
myGraph.addEdge(2, 4, 1);
myGraph.addEdge(3, 2, 2);
console.log(myGraph.shortestPath(0, 5));
