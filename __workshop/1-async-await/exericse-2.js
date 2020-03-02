// Exercise 2
// ----------

const doubleAfter2Seconds = (num) =>{
        return new Promise (resolve => {
            setTimeout( () => {
            resolve (num*2); 
        }, 2000);})
    }


const addPromise = async(num)=>{
        let a = await doubleAfter2Seconds(10);
        let b = await doubleAfter2Seconds(20);
        let c = await doubleAfter2Seconds(30);
        return(num + a + b + c);
        
}

addPromise(20).then((sum) => {
    console.log(sum);
});