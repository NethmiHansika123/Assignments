//create object in TypeScript

const person = {
	name: '',
	age: 30,
	hobbies: ['Sports','Cooking'],
	role: [2,'author']

};

person.role.push('admin');
person.role[1] = 10;

//create type
const person = {

	name:String;
	age: number;

}={
	name: '',
	age: 30

};
console.log(person.name);


//create array different variable types

let favouriteActivities: any[];
favouriteActivities = ['Sports',1];


//print the array

for (const hobby of person.hobbies){
	console.log(hobby);
}

//create array for more variable types
function combine(input1: number|string, input2: number|string){

	const result = input1 + input 2;
	return result;
} 
//call back function

function addAndHandler(n1: number,n2:number,cb: (num: number) => void){

}
//calling the callback function

addAndHandler(10,20,(result) => {
console.log(result);

})

let userInput: unknown;
let userName: string;

userInput =5;
userInput = 'Max';

if(typeof userInput === 'string'){
userName = userInput ;
}

//generating error code
function generateError(message: string,code: number){

	throw {message: message, errorcode: code}

}


generateError('An error occured!', 500)


//query selector

const button = documnet.querySelector('button')!;
if(button){
button.addEventListner('click', () => {

	console.log('clicked !');

	});

}

Reference - https://www.youtube.com/watch?v=BwuLxPH8IDs
