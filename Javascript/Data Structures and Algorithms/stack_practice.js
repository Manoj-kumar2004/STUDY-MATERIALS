class Stack
{
    constructor()
    {
        this.storage={};
        this.count=0;
    }
    push=function(value) {
        this.count++;
        this.storage[this.count-1]=value;
    }
    pop=function()
    {
        this.count--;
        let result=this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    peek=function()
    {
        console.log(this.storage[this.count-1]);
    }
    disp=function()
    {   let tcount=this.count;
        while(tcount>0)
        {
            console.log(this.storage[tcount-1]);
            tcount--;
        }
    }
}
let stack1=new Stack;
stack1.push(1);
stack1.peek();
console.log(stack1.pop());
for(let i of 'HELLO')
{
    stack1.push(i);
}
stack1.disp();