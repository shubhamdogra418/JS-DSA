//349. Intersection of Two Arrays
function interArr (nums1, nums2) {
    let res=[];
    let mySet1=  new Set([...nums1]);
    let mySet2= new Set([...nums2]);
    for(let el of mySet1) {
        if(mySet2.has(el)) res.push(el);
    } return res;
}

function interSets (nums1, nums2) {
    let set1= new Set();
    let set2= new Set();
    return [...set1].filter(n => set2.has(n));
}

nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(interArr(nums1, nums2));