console.log("API Fetching")

// ---------------------GET---------------------------------------------

    // let data = fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then((res) => {
    //     console.log(res.status, "res")
    // })


// async function data1 (){
//     let data2 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const json = await data2.json()

//     console.log(data2)
//     console.log(json)
// }

// data1()

// console.log(data, "API")

// --------------------Post---------------------

async function postapi(){
    const api = await fetch("https://jsonplaceholder.typicode.com/posts" , {
        method: 'POST',
        body: JSON.stringify({
          title: 'Abdur Rehman Siddiqui',
          body: 'Developer',
          name: "abd",
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      let a = await api.json()

      console.log(a)

}


postapi()
