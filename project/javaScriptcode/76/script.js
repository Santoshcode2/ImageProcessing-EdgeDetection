// async function getData(){
// return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//           resolve(455)
//       }, 3500);
// })
// }
/* ye async function banaya hai jo background me data lane kaam karega */
async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    return data
 
    
    //   .then(response => response.json())
    //   .then(json => console.log(json))
}

async function main() {
    
    console.log("Loading modules")
    
    console.log("Do Something else")
    
    console.log("Load data")
    
    let data = await  getData()
    
    console.log(data)
        
    console.log("process data")
        
    console.log("task2")
}
main()
// data.then((v)=>{
    
//     console.log(data)
    
//     console.log("process data")
    
//     console.log("task2")

// })
