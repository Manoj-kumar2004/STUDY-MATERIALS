let a = 'UDDDUDUU';
let count = 0;
let Vcount = 0;
let Ucount = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] === 'U') {
        count++; // Increment count for each uphill step
        if (count === 0) {
            Ucount++; // Increment Ucount every time the altitude returns to sea level
        }
    } else if (a[i] === 'D') {
        count--; // Decrement count for each downhill step
        if (count === -1) {
            Vcount++; // Increment Vcount every time the altitude goes below sea level
        }
    }
}

console.log(Vcount);
