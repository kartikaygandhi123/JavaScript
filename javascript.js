//1  Ways Of Printing 
//  console.log("Hello World")
// alert("me");
// console.warn("warning");
// console.error("error 104");

// 2 Variables in Java

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// numbers
var num1 = 455;
var num2 = 56.76;
// console.log(num1 + num2);
// strings
var str1 = "this is a string";
var str2 = "this is also a strig";
// console.log(str1 + str2);
// objects as datatype

var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.99

}

// console.log(marks);


// boolean

var a = true;
var b = false;
// console.log(a,b);

// undefined types

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);

// primitive data types and reference data types
// undefined,null,numbers,string,boolean,symbol
// arrays and objects

// ARRAYS

var arr = [1, 2, "dhundli", 4, 5];
// console.log(arr);
// console.log(arr[0]);

// OPERATORS

// var x =23;
// var y =3;

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x%y);
// console.log(x/y);

// var c=x;
// c+=10;
// c-=20;

// console.log(c);

/*console.log(x==y);
console.log(x<=y);
console.log(x>=y);
console.log(x<y);
console.log(x>y);
*/


// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&true);
// console.log(false&&false);

//  console.log(true||false);
//      console.log(false||false);
//      console.log(false||true);
//      console.log(true||true);

// console.log(!false);


// FUNCTIONS


function avg(a, b) {
    return (a + b) / 2;
}

c = avg(6, 7);
// console.log(c);

c2 = avg(9, 10);
// console.log(c2);

// Conditionals
// if else


var age = 26;
/*
if (age>18){
    console.log('you are not a kid');
}
else{
    console.log('you are a kid');
}



if (age>32){

    console.log("you are not a small kiddo");

}

else if (age>20){
    console.log("run down");

}

else if (age>25){
    console.log("hello there printing this");

}
else {
    console.log("this is ending");
}
console.log("tata bye bye");
*/


// LOOPS

var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// break and continue
//  for(var i=0;i<arr.length;i++){       
//       if(i==2)//{break;}
//       continue;
//  console.log(arr[i]);}

// }
// FOREACH 
// arr.forEach(function(element){
//     console.log(element);
// })

let j = 0;
// const a=0;   it is a constant only used to not modify any data


// WHILE LOOP
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


// DO WHILE LOOP

// do{
//     console.log(arr[j]);
//     j++;

// }while(j<arr.length);



// let myarr=["fan","camera",34,null,true];
// console.log(myarr);

// POP - REMOVES FROM LAST
// myarr.pop();
// console.log(myarr);


// PUSH
// myarr.push("kartik");
// console.log(myarr);


// PUSH - PUSHES TO THE LAST
// myarr.push("hello");
// console.log(myarr);



// SHIFT METHOD REMOVES FIRST ELEMENT
// myarr.shift()
// console.log(myarr.unshift("kartik"))
// console.log(myarr)


// STRING METHODS IN JAVASCRIPT

// let myLovelyString= "iam a good boy good";
// console.log(myLovelyString.length)

// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,3))
//  console.log(myLovelyString.replace("iam","kartik is"))


// let myDate = new Date();
// console.log(myDate)
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())


// DOM MANIPULATION

// let elem = document.getElementById('click');

//  console.log(elem);
//  let elemClass= document.getElementsByClassName('container');
// console.log(elemClass);
// // elemClass[0].style.background='yellow'
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")

// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerText);
// console.log(elemClass[0].innerHTML);


// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "this is a created para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = 'The Bold Paragraph';
// tn[0].replaceChild(createdElement2, createdElement);

//    SELECTING USING QUERY SELECTOR
// sel=document.querySelector('.container')
// console.log(sel)
// sel=document.querySelectorAll('.container')
// console.log(sel)


//   EVENTS in Javascript

// function clicked() {

//     console.log('The button was clicked')
// }

// window.onload = function () {
//     console.log('window loaded succcessfully')
// }

//  re=document.getElementsByClassName('container')
//  console.log(re);

// firstcontainer.addEventListener('click', function () {
//    document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
//     console.log('clicked on container')

//  })

// firstcontainer.addEventListener('mouseover', function () {
//     console.log('mouse on container')


// })
// firstcontainer.addEventListener('mouseout', function () {
//     console.log('mouse out of container')


// })
// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
//  firstcontainer.addEventListener('mouseup', function () {
//      document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log('mouse up  ')


//  })

// firstcontainer.addEventListener('mousedown', function () {
//     document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked to MAKE SMALL</b>"
//     console.log('mouse down on  container ')

//  })


// SET TIMEOUT AND SETinterval



// ARROW FUNCTIONS
// sum=(a,b)=>{return a+b;}

// logkaro=()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b>fired event triggred</b>"
//      console.log('mouse down on  container ')
// }

// setTimeout(logkaro,2000);
// clr= setInterval(logkaro,2000); 
// clearInterval(clr)