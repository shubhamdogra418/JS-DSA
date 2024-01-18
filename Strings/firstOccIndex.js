//28. Find the Index of the First Occurrence in a String

function firstOcc(haystack, needle) {
    if(needle.length > haystack.length) return -1;
    return haystack.indexOf(needle);
}

function firstOccSubstr(haystack,needle) {
    let L= needle.length;
    let H= haystack.length;
    for(let i=0;i<=H-L;i++) {
        if(haystack.substr(i,i+L) === needle) return i;
    } return -1;
}

function firstOccMath (haystack, needle) {
    let k=0;
    for( let i=0;i<haystack.length;i++) {
        if(haystack[i] === needle[k]) k++;
        else {
            i=i-k;
            k=0;
        } if(k === needle.length) return i-k+1;
    } return -1;
}
 
haystack = "shubham", needle = "ham";
console.log(firstOcc(haystack,needle));
console.log(firstOccSubstr(haystack, needle));
console.log(firstOccMath(haystack,needle));