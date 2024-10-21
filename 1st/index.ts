// //TODAY WORK 14/10/2024

// console.log("Welcome to typeScript");
// var Name:string ="M Adeel Chowdhry";
// let age:number =17;
// console.log(Name.indexOf("a"));



// let myNumber:number[]=[34,234,99,67,55];

// console.log(myNumber[3]);
// console.log(myNumber);
// for (let index:number = 0; index < myNumber.length; index++) {
//     let item = myNumber[index];
//     console.log(index + " => " + item);
// }



// //TODAY WORK 16/10/2024

// var  myNumbers = [34, 54, 23, 56, 798];

// // 1  PUSH //
// console.log(myNumbers.push(78));
// console.log(myNumbers);

// // 2 POP //
// console.log(myNumbers.pop());
// console.log(myNumbers);

// // 3 UNSHIFT //
// console.log(myNumbers.unshift());
// console.log(myNumbers);

// // 4 SHIFT //
// console.log(myNumbers.shift());
// console.log(myNumbers);

// // 5 SLICE //
// let slicedNumbers=myNumbers.slice(1, 3);
// console.log(slicedNumbers)
// console.log(myNumbers)

// // 6 SPLICE //
// console.log(myNumbers.splice(2,0,44,34,69,53,11));
// console.log(myNumbers);

// //Map

// // let mypersons= [{pname:"M Adeel Chowdhry",gender:"Male"},{pname:"M Ahmed Chowdhry",gender:"Male"},{pname:"M Ali Chowdhry",gender:"Male"},{pname:"Ilma",gender:"Female"},{pname:"Areeba",gender:"Female"},{pname:"Haleena",gender:"Female"},]

// // let respectedNames=mypersons.map((a)=>{
// //     if(a.gender == "Male"){
// //     a.pname= "Mr."+a.pname + " is a Male";
// //     a.gender= "M";
// //     return a;
// //     }
// //     else{
// //         a.pname= "Ms."+a.pname + " is a Female";
// //         a.gender= "F";
// //         return a;
// //         }
// // });
// // console.log(respectedNames)  



// let mypersons = [
//     { pname: "M Adeel Chowdhry", gender: "Male",relationshipStatus:"Unmarried" },
//     { pname: "M Ahmed Chowdhry", gender: "Male",relationshipStatus:"married" },
//     { pname: "M Ali Chowdhry", gender: "Male",relationshipStatus:"Unmarried" },
//     { pname: "Ilma", gender: "Female",relationshipStatus:"Unmarried" },
//     { pname: "Areeba", gender: "Female",relationshipStatus:"Unmarried" },
//     { pname: "Haleena", gender: "Female",relationshipStatus:"Unmarried" }
// ];

// let respectedNames=mypersons.map((a)=>{
//     if(a.gender == "Male"){
//     a.pname= "Mr."+a.pname + " is a Male";
//     a.gender= "M";
//     return a;
//     }
//     else{
//         a.pname= "Ms."+a.pname + " is a Female";
//         a.gender= "F";
//         return a;
//         }
// });
// console.log(respectedNames)



//TODAY WORK 18/10/2024

//TYPE

// type persons = {
//     name: string,
//     age:number,
//     gender: string,
//     relationshipStatus?: string,
//     }

//     let  mypersons: persons={
//         name: "Adeel",
//         age: 17,
//         gender: "Male",
//         }

//         console.log(mypersons);


// //INTERFACE

// interface Animal {
//     name: string;
//     age: number;
//     class?:string,
// }

// let  swordfish: Animal = {
//     name:"Merlin",
//     age: 5,
// }

// console.log(swordfish);


// let Camel:Animal={
//     name: "Camel",
//     age: 5,
//     class: "Mammal",

// }

// for (var item in Camel) {
//    console.log(item +" => "+Camel[item]);
// }
       