//let a=4;
//let b=5;
//let c=a+b;
//console.log(c);

// funksiya -> kodni qayta qayta yozmaslik
// js funksiya , declaration,expression,arrow,
// FUNCTION DECLERATION
// 3 TA ASOSIY QISM  key->function nomi->

//function  SHowHelloworld()
//{
    //console.log("Hello world!");
//}
//SHowHelloworld();

//let age=17;
//console.log(age);
//function sayHellotoUser(name)
// {
//     let age=20;//
//     console.log(`Hello ${name},he is ${age} years old`);
// }

// sayHellotoUser("Sardor");
// console.log(age);

// () -> argument dynamic malumotlar

// ""  ` ` -> backstick/

// argumentdi ichida name

// lakal va global malumot turi

// lokal malumot turi -> functiondi  blok sxemasi ichida boladi

// global malumot turi -> functiondi blok sxemasi ichida bolmasa

//let age=> 17 edi , funksiya ichida 20 bersak ham u tasir qilmadi ,funksiya ichida 20 tashqarida esa 17

//const ae=18+(getCalculations(4,7));
//console.log(ae);

//function getCalculations(a,b)
//{
 //   return a+b;  // malumotdi qaytaradi ozida saqlab turadi, i ustida amal bajarsa boladi 
   // ozidan keyin ishlatmidi 
 //   let tyu=25;
  //  console.log(tyu);
//}


// function decleration => biz uni script ichida xohlagan joyimizda chaqiramiz

// const HelloWorld=function()
// {
//     console.log("Hello world!");
// }
// HelloWorld();
// const CalculateXojiaka=function(a,b)
// {
//     return a+b;
// }
// console.log(CalculateXojiaka(9,7));

// // function expression => function nomi yoq boladi
// // function expression


// // // arrow function =>

// // const CalculateXojiaka1=(a,b)=>
// // {
// //     return a+b;
// // }

// // // amal 1ta bolsa => bir qatorda blok sxemasiz yoziladi
// // console.log(CalculateXojiaka1(9,8));


// // metod -> tayyor funksiya => obyektda,arrayda,stringda =>

//   const hojiaka='Helloworld!'; // 12 ta belgi bor
//   console.log(hojiaka.length);
 
//   // lenght -> metod -> property
//   // qiymat 
//   // metod  funksiya  () =>argument
//   console.log('Bu harf',hojiaka.charAt(2));
//   console.log(hojiaka[5]);  // property
//   console.log(hojiaka[5]='A');
//   console.log('Harflarni kattalashtrdik',hojiaka.toUpperCase());
//  console.log('harflarni kichraytirdik',hojiaka.toLowerCase());
// console.log('kesish:',hojiaka.slice(0,-5));// -minus son 
// // => metod faqat return qiymat qaytaradi
//  console.log('toza kesish',hojiaka.substring(0,-5));

//  // slice=> substring
// console.log(hojiaka);

// const  Password='  ozbekiston     '  // parol
// // trim
// console.log(Password);
// console.log(Password.trim());
// console.log(Password.trimStart());
// // trimstart- oldidagi space chopadi
// console.log(Password.trimEnd());
// // trim methoddi bizga ortqcha spacelarni qirqish uchun ishlatamiz

// // trimdi bizga ortqcha spacelarni qirqish uchun ishlatamiz4

// const son=13.7;
// console.log('roundni natijasi',Math.round(son));
// // round ozidan kattaga qarab yuradi
// console.log('floorni natijasi',Math.floor(son))
// // floor nuqtadan keyingilardi chopvoradi
// // round floor vazifasi taqriblaberish

// const width='323.9px'; // stringda 
// // stringdegi malumotdi raqamga otkazish
// console.log('numberga olish',parseInt(width));
// // parseInt => stringdi raqam qb oladi + uni yaxlitledi (prinsipi floor kabi verguldan keyin chopad)
// console.log('numberga olish',parseFloat(width));
// // parseFloat => stringdi raqam qib beradi

// // 4
// // 
//88r8


// const firstlog=() =>
//   { setTimeout(function(){   // timeout 
//       console.log('first log');
//   },1000) /// 1000 -> 1 sekund  

// };
// function second()
// {
//   console.log('second');
// }
// firstlog();
// second();
// // const age=function( age)
// // {
// //   console.log("16");
// // }
// // console.log(age);

// function ShowGreeting(callback)
// {
//     console.log('Hello world');
//     callback();
// }

// ShowGreeting(function()
// {
//     console.log('are you ready');  // doimiy varianti 

// })

// ShowGreeting(()=>{console.log('are you ready')}); // arrow varianti bu hammasi bir xil ishlatiladi
//  callback 163dan chaqirilmayapti
//  callback function 

// callback function qaysidir funksiya qanchadir davom etgandan keyin chaqirish uchun ishlatiladi


// const person=
// {
//     name:'Abdunazar',
//     age:19,
//     job:'teacher',
//     hobbies:{spor:'football',
//      games:'cs go',
//     },

//    sayHello:function()
//    {
//          console.log(`hell0 ${this.name}`); // this  obyektdi ichide xossani chaqrish uchun ishlatiladi 
//    },
// }

// // this haqda toliq keyin tushintiriladi

//  person.sayHello(); // obyekt metodi
//   console.log(person); // persondi chaiqramiz .name qib hossani chaqrishimiz mumkin
// // // // endi iteratsiya qilish mumkin ,har bir keyga murojaat qilish  uchun
// for (let key in person)// key bu hossalar ,

//  {
//     console.log(typeof key);
//    console.log(typeof person[key]);
//      console.log(`property:"${key}`,`value :${person[key]}`);// valuega murojat
//  }
// // // // faqatgina string malumot turini chiqara olamiz
// // // // objectni chiqarish uchun for in ishlatiladi
 
// //let counter=0;
// // for in faqatgina obyekt uchun   for of faqat massiv uchun ishlatiladi
//  for (let key in person)
//  { 
//      if(typeof person[key]==='object');
//         {
//             for(let i in person[key])
//             {
//                 console.log(`property:"${i}`,`value :${person[key [i]]}`);
//             }
//         }
//        // counter ++;
//     }

//  //console.log(counter);
//     console.log(Object.keys(person).length);
//     // funks orqali chaqirsh let counter koyb kuyb
// // obyekt uchun ham ozimiz metod yasashimiz mumkn
// // metod



// //destruktizatsiya
// // person.name qib yuravermizmu

// const {name,sayHello,hobbies}=person;  // obyektni ichidagi malumotni ovolish uchun 
// console.log(hobbies);


const person=
{
    name:'Abdunazar',
    age:19,
    job:'teacher',
    hobbies:{spor:'football',
     games:'cs go',
    },
  
  }

for (let key in person)     // takrorlanish iteratsiya aylanish
{
  console.log(typeof key);
  console.log(typeof person[key]);
  
  console.log(`property:"${key}`)  // name ,keyin aylnayaptida age
  console.log('value:',person[key]) // value: Abdunazar

}

// for in faqatgina obyekt uchun ishlatiladi for of bolsa massiv




// iteratsiya yordamida obyekt bilan

console.log(person.name)  // .name (key) hossa

// this ,destruktizatsiya ,obyektdi ichida ozimiz metod yaratish


//destruktizatsiya  -> 
//
const  {name,age}=person;
// person.name -> person
console.log(age,name);

//massiv -> bir xil turdagi malumot,uni xotiradagi hajmi hammasiniki bir xil malumot turi

const color=['red','blue','yellow','black','green'] 
// name ,age ,job -> properties
console.log(color.length);// method-> uzunligini ulchash uchun
console.log(color[3]);// [3] index bilan ishlash uchun
// pop va push
// pop oxiridagi elementni ochiradi 

console.log('kesb yuborilgan soz:',color.pop());
console.log("qoshiladigan soz:",color.push('white'));// push oxiriga qoshadi
// shift va unshift
// oldidan kesadi -> shift
console.log("oldidan kesilgan soz",color.shift())
// unshift
console.log("oldidan qoshadi",color.unshift('purple'))
console.log(color);
