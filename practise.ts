function maximumScore(security_val: number[], k: number) {
  let start = 0;
  let maximum = Number.NEGATIVE_INFINITY;
  while (start < security_val.length) {
    let sum = 0;
    for (let i = start; i < security_val.length; i += k) {
      sum = sum + security_val[i];
    }
    maximum = Math.max(maximum, sum);
    start++;
  }
  return maximum;
}

function solution(A, X) {
  const N = A.length;
  if (N == 0) {
    return -1;
  }
  let l = 0;
  let r = N - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (A[m] == X) {
      return m;
    }
    if (A[m] > X) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
}

function solution2(A: number[]): number {
  let n: number = A.length;
  let L: number[] = new Array(n + 1);
  L[0] = -1;
  let i: number;
  for (i = 0; i < n; i++) {
    L[i + 1] = A[i];
  }
  let count: number = 0;
  let pos: number = Math.floor((n + 1) / 2);
  let candidate: number = L[pos];
  for (i = 1; i <= n; i++) {
    if (L[i] == candidate) count = count + 1;
  }
  if (count > pos) return candidate;
  return -1;
}

function removeDuplicates(str: String) {
  let set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      set.delete(str[i]);
    } else {
      set.add(str[i]);
    }
  }
  return [...set.values()].join("");
}

console.log(removeDuplicates("azxxzy"));

function formatCheck(num: number) {
  return num;
}

function formatCheck2(num: number) {
  return num;
}
