var name ='Max';
var age=20;
var hasHobbies =true;

const summariseUser = (username,userage,userhashobby)=>{
    return ('Name is '+username+' age is '+userage+' userhashobby '+userhashobby);
}

const person ={
    name:'Tanisha',
    age: 23,
    greet: ()=>{
        console.log("Hey!");
    }
} 

// console.log(summariseUser(name,age,hasHobbies));

// const hobbies= ['driving','cooking','coding'];

// //spread operator 
// //pull the elements from an array and add in some other array
const copiedArray =[...hobbies];
console.log(copiedArray);

// //rest operator
// //it will bundle them up in an array for us
// //basically dynamically passing the arguments
const toArray=(...args)=>{
    return args;
}
console.log(toArray(1,2,3,4,9,4,3));

//destructuring
//pulls the property out of the object and stores it in that variable
//object destructuring
const person1={
    name:'Tanisha'
}
const person2={
    name:'Tani'
}
const printMyName=({name})=>{
    console.log(name);
}
printMyName(person2);

// //array destructuring
// //pulled out by position, can have any names
const [hobby1, hobby2]=hobbies;
console.log(hobby1, hobby2);

//async code or async promise
setTimeout(()=>{
    console.log("Hey");
},800);
console.log("Hello");

//callbacks, async stuff
// This code snippet shows an example of asynchronous programming in JavaScript using setTimeout and a callback function.
// The function fetchData is defined with one parameter, which is a callback function. 
// This function is set to execute after a delay of 1500 milliseconds using setTimeout. 
// Once the timeout expires, the callback function is executed with the string 'Done' as its argument.
// In the main code block, another setTimeout is used to delay the execution of its contents by 2000 milliseconds.
// Once the timeout expires, the message 'Timer done!' is printed to the console.
// Additionally, the fetchData function is called with a callback function that logs the argument passed to it to the console.
// When the fetchData function executes, it will take 1500 milliseconds to complete and then execute the callback function with the string 'Done'. 
// This shows how JavaScript can use callbacks to handle asynchronous code execution and avoid blocking the main thread of the program.
const fetchData = ()=>{
    const promise= new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve('Done');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer done!');
    fetchData.then(text=>{
        console.log(text);
    })
    .then(text2=>{
        console.log(text2);
    });
}, 2000);

