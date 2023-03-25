/**
 * if an iterabor is also an iterable, it can directly be used with 'for..of loop. you can make it an iterable by providing it with Symbol.Iterator, we return the iterator itself.'
 */

const infiniteSequenceGenerator ={
    CurrentNumber :0,
    //make "infiniteSequenceGenerator" iterator an iterable
    [Symbol.iterator](){
        return this;
    },
    next(){
        return{
            value : this.CurrentNumber++,
            done:false 
        }
    }
}

const iter =infiniteSequenceGenerator[Symbol.iterator](); //true 

console.log(iter === infiniteSequenceGenerator)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)

for (let item of iter){
    if(item >20) break;
    console.log(item)
}