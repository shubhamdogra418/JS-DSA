function reverseStr(s) {
    let i=0;
    let j=s.length-1;
    while(i <= j) {
        let temp= s[i];
        s[i]=s[j];
        s[j]=temp;
        i++;
        j--;
    } return s;
}

function reve(s) {
    for(let i=s.length;i>=0;i--) {
        s=[];
        s.push(s[i]);
    } 
}
s = ["h","e","l","l","o"];
console.log(reverseStr(s));
console.log(reve(s));