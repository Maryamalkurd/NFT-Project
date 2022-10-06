// let name = 'maryamyousefalkurd'.toUpperCase();
// // let myArray=new Array();
// let myArray=name.split("")
// for (  i = 0; i < name.length; i++ ){
//     console.log(myArray[i])
// }
// const todos=[
//     {
//         id:1,
//         text:'studing js',
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:'studing js2',
//         isCompleted:false
//     },
//     {
//         id:3,
//         text:'studing js3',
//         isCompleted:true
//     }
// ]
// for(let todo of todos){
//     console.log(todo.text)
// }
// // forEach
// todos.forEach(function(todo) {
//   console.log(todo)  
// })
// //by arrow function
// todos.forEach((todo)=> {
//     console.log(todo.id)  
//   })
// // map
//  const TextArr = todos.map((todo)=> {
//     return todo.text 
//   })
//   console.log(TextArr)

//   //filter
//   //note forEach/map/filter is high order array method

//   const done = todos.filter((todo)=>{
//     return todo.isCompleted===true;
//   }).map((todo)=>{
//     return todo.text
//   })
//   console.log(done)
// //   console.log(document.domain)
// document.getElementById('myButton').addEventListener('click',myfunction)

// function myfunction(){
//     fetch('https://jsonplaceholder.typicode.com/photos').then(function(data){
//         console.log(data)
//     })
// }
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// function typeCheck(object) {
//     // Use console.log() for debugging
//     const target = {
//   age_int: 2,
//   name_string: "everyone",
//   job:true
// };

// const handler1 = {};
// const handler2 = {}

// const proxy1 = new Proxy(target, handler1 ,handler2);
// if(typeof(target)!== String || typeof (handler1)!== Number ||typeof(handler2)!==Boolean){
//     console.log(Error)
// }   
// }
// module.exports = typeCheck;
const btn = document.querySelector('.rel')
const list = document.querySelector('.list')
btn.addEventListener('mouseover',function(){
    list.style.display = "block"
})
btn.addEventListener('mouseleave',function(){
    list.style.display ="none"
})
const btn2 = document.querySelector('.rel2')
const list2 = document.querySelector('.list2')
btn2.addEventListener('mouseover',function(){
    list2.style.display = "block"
})
btn2.addEventListener('mouseleave',function(){
    list2.style.display ="none"
})
const btn3 = document.querySelector('.rel3')
const list3 = document.querySelector('.list3')
btn3.addEventListener('mouseover',function(){
    list3.style.display = "block"
})
btn3.addEventListener('mouseleave',function(){
    list3.style.display ="none"
})
// const btn4 = document.querySelector('.rell')
// const list4 = document.querySelector('.listt')
// btn2.addEventListener('mouseover',function(){
//     list4.style.display = "block"
// })
// btn2.addEventListener('mouseleave',function(){
//     list4.style.display ="none"
// })
const close = document.getElementById('close')
const p = document.getElementById('answer')
close.addEventListener('click',function(){
 close.classList.toggle('fa-minus')
 close.classList.toggle('fa-plus');
 p.style.display = close.classList.contains('fa-plus')?'none':'block'
})
function checkStatus(a, b, c) {
    // Your Code Here
    const arrStr = [a,b,c]
    for (let i = 0; i < arrStr.length; i++) {
        // console.log(arrStr[i])
        if (typeof(arrStr[i])=='string') {
             Strr = arrStr[i]
        }else if (typeof(arrStr[i])=='number'){
             numm = arrStr[i]
        }else if(typeof(arrStr[i])=='boolean'){
             bool = arrStr[i]
    
        }
        console.log(`Hello ${Strr},Your Age Is ${numm},${bool?'You are Available':'You are Not Availble'}`)
    }
    
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
  