//349. Intersection of Two Arrays
function interArr (nums1, nums2) {
    let res=[];
    let mySet1=  new Set([...nums1]);
    let mySet2= new Set([...nums2]);
    for(let i=0; i<mySet1.length; i++) {
        for(let j=0; j<mySet2.length; j++) {
            if(mySet1[i] === mySet2[j]) {
                res.push(mySet1[i]);
            }
        }
    } return res;
    
}
nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(interArr(nums1, nums2));