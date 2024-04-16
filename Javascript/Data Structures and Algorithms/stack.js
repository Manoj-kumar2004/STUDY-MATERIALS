// let s=[],pal='racecar',rs='';
// for(let i=0;i<pal.length;i++)
//     {s.push(pal[i]);
//     }
// for(let j=s.length-1;j>=0;j--)
//     rs+=s.pop()
// console.log(rs)
// console.log(rs===pal);
//using function like a class
class Stack {
    constructor() {
        this.storage = {};
        this.count = 0;}
        pop = function () {
            if (this.count === 0) return undefined;
            this.count--;
            let result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };
        push = function (value) {
            this.count++;
            this.storage[this.count - 1] = value;

        };
        peek = function () {
            return this.storage[this.count - 1];
        };
        size = function () {
            return this.count;
        };
        display = function () {
            let index = this.count - 1;
            while (index >= 0) {
                console.log(this.storage[index]);
                index--;
            }
        };
    }

let myStack=new Stack,ress='';
let word='malayalam',rword='';
for(let i=0;i<word.length;i++)
{
    myStack.push(word[i]);
}
console.log(myStack.count)
while(myStack.count>=1)
{
ress=myStack.pop()
console.log(ress)
rword+=ress;
}
console.log(rword);
console.log(rword===word)
