const getSubsequenceInt = (arr, index, current, subs) => {
    if (index == arr.length) {
        subs.add(current.slice());
        return;
    }
    current.push(arr[index]);
    getSubsequenceInt(arr, index + 1, current, subs);
    current.pop();
    getSubsequenceInt(arr, index + 1, current, subs);
};
const getSubsequenceStr = (str, index, current, subs) => {
    if (index == str.length) {
        subs.add(current);
        return;
    }
    getSubsequenceStr(str, index + 1, current + str[index], subs);
    getSubsequenceStr(str, index + 1, current, subs);
};
let allSubsequences = new Set();
getSubsequenceStr('aab', 0, '', allSubsequences);
console.log(allSubsequences);
//# sourceMappingURL=subsequence.js.map