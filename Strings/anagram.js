//242. Valid Anagram

function isAnagram (s, t) {
    s=s.split("").sort().join("");
    t=t.split("").sort().join("");
    return s===t;
}

function isAnagramObj (s,t) {
    let obj1={};
    let obj2={};
    if(s.length !== t.length) return false;
    for(let i=0; i<s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) +1;
        obj2[t[i]] = (obj2[t[i]] || 0) +1;
    } for(key in obj1) {
        if(obj1[key] !== obj2[key]) return false;
    } return true;
}

function isAnagramArr(s,t) {
    let arr= new Array(26).fill(0);
    for(let i=0;i<s.length;i++) {
        arr[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
        arr[t.charCodeAt(i)-'a'.charCodeAt(0)]--;
    }
    for(let i=0;i<arr.length;i++) {
        if(arr[i]!==0) return false;
    } return true;
}
s = "anagram", t = "nagaram"
console.log(isAnagram(s,t));
console.log(isAnagramObj(s,t));
console.log(isAnagramArr(s,t))