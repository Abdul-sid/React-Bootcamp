// let promise = new Promise (function (resolve, reject) {
    
//         setTimeout(() => {
//             console.log("new Promise")
//             resolve()
//         },1000)
    
//     })

// promise.then( () => {
//         console.log("promise resolve");
//         return 2
//     })
//     .then((val) => {
//         console.log(val)
//         return val + 2
//     })
//     .then((val2) => {
//         console.log(val2)
//     })
//     .catch(function(error){
//         console.log(error)
//     })

// ----------------------------------

// function success (){
//     console.log("success")
// }

// function failure (){
//     console.log("failure")
// }

// function checkUserPromise(userInput, success, failure){
//     userInput === true ? success() : failure();
// }

// checkUserPromise (true, success, failure)


// --------------------------------------------------

// function success (){
//     console.log("success")
// }

// function failure (){
//     console.log("failure")
// }

// function checkUserPromise(userInput){

//     new Promise(function(resolve, reject) {
//         if(userInput){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })

// }

// checkUserPromise(true)

// -------------------------------------------------

// const anyFunction = () => {
//     return  (((Math.floor(Math.random() * 10)) % 2) === 0) ? true : false
// }

// const resolveFunction = () => console.log("success")
// const rejectFunction = () => console.log("failure")

// const result = new Promise ((res, rej) => {
//     setTimeout(() => (anyFunction() ? res() : rej()), 2000)
// })

// result.then(resolveFunction).catch(rejectFunction)
// console.log("hello world")