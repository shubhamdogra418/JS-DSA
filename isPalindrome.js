function isPal(x) {
    // if(x<0) return false;
    // return x<0 ? false:
      return x === +x.toString().split("").reverse().join("");
}

const res= isPal(121);
console.log(res);

