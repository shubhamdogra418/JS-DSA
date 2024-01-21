//151. Reverse Words in a String

function revWords(s) {
    return s.split(" ").reverse().filter((val) => val!=="").join(" ");
}
s = "a good   example"
console.log(revWords(s));