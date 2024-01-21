//345. Reverse Vowels of a String

function revVowels(s) {
    //string are immutable in JS so Convert it to array
    const Vowels= new Set(["a","e","i","o","u","A","E","I","O","U"]);
    //convert string into array
    const ans=[...s];
    let low=0;
    let high=s.length-1;

    while(low < high) {
        if(!Vowels.has(ans[low])) low++;
        if(!Vowels.has(ans[high])) high--;
        if(Vowels.has(ans[low]) && Vowels.has(ans[high])) {
            let temp=ans[low];
            ans[low]=ans[high];
            ans[high]=temp;
            low++;
            high--;
        }
    } return ans.join("");
}
s="leetcode";
console.log(revVowels(s));