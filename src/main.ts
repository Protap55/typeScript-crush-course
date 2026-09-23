// const person = (name: string, age: number): string => {
//   return `Hi ${name}. Your age ${age} years old.`;
// };

// const details = person("Protap dutta", 28);
// console.log(details);

// const studentResult = (
//   stdName: string,
//   mathematics: number,
//   physics: number,
//   english: number,
// ): string => {
//   return `Hi ${stdName}, Your math marks is ${mathematics}, Your physics marks is ${physics} & Your english marks is ${english}`;
// };
// const del = studentResult("Polash", 33, 85, 46);
// console.log(del);

// const studentResult = (stdName: string = "Rajesh"): void => {
//   console.log(`Your name ${stdName}`);
// };
// studentResult();

// const studentResult = (): never => {
//   throw new Error("faild ");
// };
// studentResult();

// const voter = (age: number = 17): string => {
//   if (age >= 0 && 18 >= age) {
//     throw new RangeError("Not eligible");
//   }

//   return "You are voter ✅";
// };
// console.log(voter());

// const food: (string | number)[] = ["Alo", "Lebu", "Potol", "Kumra"];

// food.push(30);
// console.log(food);

// const person: [string, number, boolean, string] = ["akash", 38, true, "Tabir"];
// person[0] = "Protap";
// person[1] = 28;
// person.push("Tometo");
// person.pop();
// person.pop();
// person.pop();
// console.log(person);

// const per: (number | number | string)[] = [30, 25, "P"];

// const studentInfo: {
//   name: string;
//   age: number;
//   address: string;
//   isJobsHolder: boolean;
//   qualification: string;
// } = {
//   name: "Protap dutta",
//   age: 28,
//   address: "Dhaka",
//   isJobsHolder: false,
//   qualification: "Civil engineering",
// };

// studentInfo.age = 29;

// console.log(studentInfo);

// : {
//   name: string;
//   age: number;
//   address: string;
//   isJobsHolder: boolean;
//   qualification: string;
// }

// type User = {
//   name: string;
//   age: number;
//   address: string;
//   isJobsHolder: boolean;
//   qualification: string;
// };

// interface User {
//   name: string;
//   age: number;
//   address: string;
//   isJobsHolder: boolean;
//   qualification: string;
// }
// interface Relationship extends User {
//   status: string;
// }
// const studentInfo: Relationship = {
//   name: "Protap dutta",
//   age: 28,
//   address: "Dhaka",
//   isJobsHolder: false,
//   qualification: "Civil engineering",
//   status: "single",
// };

// studentInfo.age = 29;

// console.log(studentInfo);

// enum ReletionShip {
//   single = "Single",
//   married = "Married",
//   divoced = "Divorce",
// }

// console.log(ReletionShip.married);

function name(params: string) {
  return params.toUpperCase();
}
console.log(name("protap"));
