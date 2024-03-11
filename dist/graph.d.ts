declare class Graph {
    private adjacencyList;
    constructor();
    addVertex(vertex: number): void;
    addEdge(vertex1: number, vertex2: number, weight: any): void;
    printGraph(): void;
    bfs(source: number, target: number): number[];
    dfs(source: number, target: number): number[];
    walk(curr: number, target: number, seen: any, path: number[]): boolean;
    shortestPath(source: number, target: number): number[];
    minimumVisited(seen: number[], dis: number[]): number;
}
declare const myGraph: Graph;
