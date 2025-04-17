
//this is an example of synchronous code execution where the code is executed line by line
//console.log("task1");
//console.log("task2");
//console.log("task3");
//console.log("task4");
//console.log("task5");

//here is the start of the program
//console.log("start operation");
//below we have defined a sleep function that pauses for a given number of milliseconds
//function sleep(milliseconds) {
    //let startTime = new Date().getTime();
    //console.log("operation is running");
    //while(new Date().getTime() < startTime + milliseconds){
      //  console.log("in progress");

    //}
    //The below codes can't be executed unless the above code is executed so it has to delay and wait
    //This usually leads to a bad user experience
  //  console.log("operation is done!")

//};
    //sleep(1000);

   // console.log("do something else...")

//Below I am converting my above synchronous code to asynchronous code
    console.log("start operation");

function sleep(milliseconds) {
    
    console.log("operation is running");
    setTimeout(()=>{
    console.log("operation is done!")

    }, milliseconds);
};
    sleep(1000);

    console.log("do something else...")