//let a=4;
//let b=5;
//let c=a+b;
//console.log(c);

// funksiya -> kodni qayta qayta yozmaslik
// js funksiya , declaration,expression,arrow,
// FUNCTION DECLERATION
// 3 TA ASOSIY QISM  key->function nomi->

function  SHowHelloworld()
{
    console.log("Hello world!");
}
SHowHelloworld();

let age=17;
console.log(age);
function sayHellotoUser(name)
{
    let age=20;
    console.log(`Hello ${name},he is ${age} years old`);
}

sayHellotoUser("Sardor");
console.log(age);

// () -> argument dynamic malumotlar

// ""  ` ` -> backstick

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

const HelloWorld=function()
{
    console.log("Hello world!");
}
HelloWorld();
const CalculateXojiaka=function(a,b)
{
    return a+b;
}
console.log(CalculateXojiaka(9,7));

// function expression