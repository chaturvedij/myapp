
//printing

console.log("Hello world");

//variable define
//var,let,const
//var
// redefine,redclare,out of scope

var nam="Ram";     //var can be redefine
console.log(nam);
var nam = 5;
console.log(nam);

const x = 5;
console.log(x);
const y = 6;

///object
let user={
    firstname: "ram",
    lastname:  "singh",
};
console.log(user);
console.log(user.firstname);
console.log(user.lastname);
//defining a is ojects;
let user2 = new Object();
user2.firstname =  "Rahul";
console.log(user2.firstname);
//Method 3 to js object
let user3 = {};
user3.first_name = "Raj";
console.log(user3);
console.log(typeof user3);
//array of object
const user_data=[
    {
        first_name: "Anil",
        last_name: "Singh",
    },
];
console.log(user_data);



