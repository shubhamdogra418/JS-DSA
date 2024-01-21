//58. Length of Last Word
function lengthLastWord(s) {
    let len=0;
    for(let i=s.length-1;i>=0;i--) {
        if(s[i] !== " ") len++; 
        else {
             if(len>0) return len; //safe case
        }
    } return len;
}
s =  "   fly me   to   the moon  "
console.log(lengthLastWord(s)); 