declare class RandomizedSet {
    map: Map<number, number>;
    arr: number[];
    constructor();
    insert(val: number): boolean;
    remove(val: number): boolean;
    getRandom(): number;
}
declare let random: RandomizedSet;
