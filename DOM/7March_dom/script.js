// // js intro

// // keyword vaiable asssign
// // let, var ,const
// // let ,var
// // let a =10;
// // var a =10;
// // const a =10;
// // document={

// // e: {
           
// //        }

// // style: {
//         //   background:red
// //    }

// // }

// // documen--> object
// // javascript event hadling language
// // document --->queryselector
// // document---->querSelctorAll
// // console.log('file running')
// // let submitVar = document.querySelector('.submit');
// // submitVar.style.height = "50px"


// // // eventHandling ------> eventListeners
// // function submitFunc() {
// //      alert('you clicked the button ')
// //  }
// // submitVar.addEventListener('click',submitFunc)

// // function printFunc() {
// //     submitVar.style.background="yellow"
// // }
// // function backFunc() {
// //     submitVar.style.background="white"
// // }

// // submitVar.addEventListener('mouseenter', printFunc)
// // // submitVar.addEventListener('mouseleave',backFunc)

// let header = document.querySelector(".header")
// console.log(header);
// let content = document.querySelector('.content')
// console.log('parent is selected',content);


// header.addEventListener('mouseenter', doSomething)
// function doSomething() {
//     console.log('function called');
//     content.innerHTML='<div class="dialog"></div>'
// }
// header.addEventListener('mouseleave', leaveContent)
// function leaveContent() {
//     content.innerHTML=''
// }


// let sample = document.querySelectorAll('.sample')
// console.log(sample);
// for (let i = 0; i < sample.length; i++){
//     sample[i].addEventListener('click', () => {
//        alert('hii')
//    })
// }



// document= {
      
// }
//
// queryselector and querselectorAll

// let someVariable = document.querySelector('.header')
// console.log(someVariable);
// console.log(someVariable.innerText)


// let result = document.querySelector('.parent')
// console.log(result.innerText)


let btn = document.querySelector('.content');
// secResult.innerText='hii this Dom topic'
// secResult.innerHTML='<div style="background-color:blue">this is inside content div</div>'

// event -listener

let parent = document.querySelector('.parent')

btn.addEventListener('click', restoreDispalyFunc)
let inputValue =document.querySelector('.input-field')



function restoreDispalyFunc() {
    parent.innerHTML=`<div>${inputValue.value}</div>`
}
// innerhtml
// innertext
// click event-->background
// dblclick event-->display =none