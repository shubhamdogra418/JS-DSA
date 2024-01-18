//1768. Merge Strings Alternately
function mergeAlternately (word1, word2) {
    //two-pointers
    let res="";
    for(let i=0;i<Math.max(word1.length,word2.length); i++) {
        if(i<word1.length) res+=word1[i];
        if(i<word2.length) res+=word2[i];
    } return res;
}
word1 = "ab", word2 = "pqrs";
console.log(mergeAlternately(word1,word2));