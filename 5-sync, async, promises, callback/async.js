// console.log("start")

// function callback(){
//     setTimeout(() => {
//         console.log("callback")
//     },3000)
// }

// function callback1(){
//     setTimeout(() => {
//         console.log("callback1")
//     },2000)
// }

// function callback2(){
//     setTimeout(() => {
//         console.log("callback2")
//     },1000)
// }

// function func() {
//     callback()
//     console.log("func")
// }
// func()


// function func1() {
//     callback1()
//     console.log("func1")
// }
// func1()


// function func2() {
//     callback2()
//     console.log("func2")
// }
// func2()

// console.log("start")


// ------------------------------------- 

// function apiFetch (){

// let promise = new Promise (function (resolve, reject) {
    
//         setTimeout(() => {
//             console.log("new Promise")
//             resolve("data")
//         },1000)
    
//     })

//     return promise

// }

// async function async(){
//     try{
//     let data = await apiFetch()
//     console.log(data, "successfull")
// }
//     catch(error){
//         console.log(error,"error")
//     }
// }

// async()