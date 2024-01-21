//387. First Unique Character in a String
function firstUniq (s) {
    let set= new Set();
    for (let char of s) {
        if (set.has(char)) set.delete(char)
        else set.add(char);
    } let n= [...set]; 
    return s.indexOf(n[0]);
}

function indexes (s) {
    for(let i=0;i<s.length;i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
    } return -1;
}

s = "loveleetcode";
console.log(firstUniq(s));
console.log(indexes(s))
