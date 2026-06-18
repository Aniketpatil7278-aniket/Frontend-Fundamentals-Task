
// export const Demo =()=>{

// const arr=[1,2,4,7,5,8,9,10];
// console.log(arr);

// arr.sort();
// arr.push(25);
// console.log(arr);
// }

// Demo();


// const car = {
//   type: "Fiat",
//   model: "500",
//   color: "white",
// };
// console.log(car);

// const demo1={
//     name:"aniket",
//     age:20,
//     weight:500,
// }
// console.log(demo1);     
const person={};
person.name="aniket";
person.age=20;

//Changing Properties
person.age=50;
// console.log(person);

///Adding New Properties
person.w=55;
// console.log(person);

//Deleting Properties
delete person.w;
// console.log(person);
// delete person["name"];

// Check if a Property Exists
//Use the in operator to check if a property exists in an object:
// let r=("name" in person);
// console.log(r);
// console.log(person);

const person2={
    name:"anket",
    lname:"patil",
    age:25,
    weight:55,
    equcation:"MCA",
};

// let text="";
// for(let x in person2){
//     text += person2[x] + " ";
// };
//     console.log(text);

// const myArray = Object.values(person2);
// let text = myArray.toString();
// console.log(text);

// let text = JSON.stringify(person2);
// console.log(text);

console.log(Object.entries(person2));


