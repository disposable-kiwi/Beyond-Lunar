async function myDisplay() {

    let myPromise = async function (){
        return 1;
    };
    
    document.getElementById("demo").innerHTML = await myPromise;
  }

