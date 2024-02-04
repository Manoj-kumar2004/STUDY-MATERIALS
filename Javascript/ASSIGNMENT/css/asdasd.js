function rotateLeft(d, arr) {
    let temp=arr.slice(0,d);
    let temp2=arr.slice(d);
    let output = [...temp2,...temp]
    return output;

}
console.log(rotateLeft(2,[1,2,3,4,5]));