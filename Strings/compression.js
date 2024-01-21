//443. String Compression
function strComp (chars) {
    let ans=[];
    let count=1;
    ans=chars[0];
    for(let i=0;i<chars.length;i++) {
        if(chars[i]===chars[i+1]) {
            count++;
        } 
        if(chars[i]!==chars[i+1]) {
            ans.push(count);
            ans.push(chars[i+1])
        }
    } return ans;
}
chars = ["a","a","b","b","c","c","c"];
console.log(strComp(chars));