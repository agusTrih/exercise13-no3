const oldArray = [3, 5, 7, 9, 11];

const newArray = oldArray.map((element) => {
    return element * 5;
});
console.log("Array sebelum di kali 5 :");
console.log(oldArray);
console.log("Array setelah di kali 5:");
console.log(newArray);
