//796. Rotate String

function rotateString (s,goal) {
    let ss=s+s;
    if(ss.includes(goal)) return true;
    else return false;  
}
s = "abcde", goal = "cdeab"
console.log(rotateString(s,goal));