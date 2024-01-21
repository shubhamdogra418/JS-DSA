//575. Distribute Candies
function candies(candyType) {
    return Math.min(new Set(candyType).size, candyType.length/2);
}
candyType = [1,1,2,3]
console.log(candies(candyType));