const EventEmitter = require("events");

const event = new EventEmitter(); //creating a new object for event 


//First event
event.on("SayMyName",()=>{
    console.log("You Name is Sanjay");
})
event.on("SayMyName",()=>{
    console.log("You Name is Ranjit");
})
event.on("SayMyName",()=>{
    console.log("You Name is Sanjeev");
})
event.emit("SayMyNam");


//Second Event
event.on("checkCode",(sc,msg)=>{
    console.log("Your Status code is : ",sc);
    console.log("Your msg code is : ",msg);
})

event.emit("checkCode",200,"OK");