//async keyword makes a function asynchronous and takes it out of the call stack and lets every
//other function run normally and waits for all functions in callstack to finish before
//firing this async function
async function myDisplay() {
    //we use a function expression to define an async function
    //the return of any async function will be a Promise Object
    //when we put a return inside an async function, that is the
    //return of an async function when the Promise is *resolved*
    //but by default the return of an async function will be
    //a Promise Object
    let exampleFunction = async ()=>{
        return 1+1;
    };
    
    //we call the exampleFunction which is an async function and capture its return, a Promise Object,
    //as the variable myPromise
    let myPromise = exampleFunction();

    //we set number equal to the resolution of myPromise by using the keyword await
    //if do *not* use the await keyword and just write "let number = myPromise", then
    //number would be set equal to the Promise Object, but because we wrote
    //"let number = *await* myPromise" this sets number equal to the *resolution* of the Promise
    //INSTEAD of the Promise Object itself

    //this is the power of await inside an async function
    let number = await myPromise;

    //anyway since we wrapped this inside an async function of myDisplay
    //the return here will also be the resolution of the Promise Object
    //the overall return of myDisplay() will be a Promise Object that
    //RESOLVES to number but itself is NOT the value of number
    return number;
  }

  myDisplay();