

const promise = new Promise((resolve, reject) => {
    console.log("Async task execution");
    throw "err";
    if(true) {
        const person = {name: "Tina"};
        resolve(person)
    } else{
        const error = {errCode: "1001"};
        reject(error)
    }
});

promise
.then (
    (val) => {console.log(val);

    }, 
    (err) => { console.log(err);

    }


).catch(() => console.log("failed!"))
 .finally(() => console.log("My wife"))