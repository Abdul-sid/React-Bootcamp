// console.log("start")   // print 1st

// setTimeout(() => {
//     console.log("content")  // print last
// }, 1000)

// console.log("end")  // print 2nd


// -------------------------------------

// console.log("start")

// function breakfast(){
//     setTimeout(() => {
//         console.log("breakfast complete")
//     }, 100)
// }

// function morning(){
//     console.log("breakfast start")
//     breakfast()
// }

// morning()

// console.log("end")

// -----------------------------------------

// function printGreetings(msg, alertGreet){
//     alertGreet(msg)
// }

// function alertGreet(msg){
//     alert(msg)
// }

// printGreetings("hello world", alertGreet)

// --------------------------------------------

// Example of callback hell (very complicated callbabck functions scenario)

// function printGreetings(msg, alertGreet){

//     if(msg === "evening"){
//         evening(alertGreet)
//     }
//     else if (msg === "morning"){
//         morning(alertGreet)
//     }
//     else if (msg === "night"){
//         night(alertGreet)
//     }
// }

// function morning(){
//     alert("good morning")
//     alertGreet("hello world")
// }

// function evening(){
//     alert("good evening")
//     alertGreet("hello world")
//  }

// function night(){
//     alert("good night")
//     alertGreet("hello world")
// }

// function alertGreet(msg){
//     alert(msg)
// }

// printGreetings("evening", alertGreet)

// ------------------------------------------------ 