function uniqueChar (s) {
    for(let i=0;i<s.length;i++) {
        for(let j=i+1; j<s.length;j++) {
            if(s[i] !== s[j]) {
                return i; 
            }
        }
    } return -1;
}

s = "loveleetcode";
console.log(uniqueChar(s));