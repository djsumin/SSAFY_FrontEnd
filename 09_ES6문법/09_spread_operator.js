let user1 = {
  id: "ssafy",
  name: "양띵균",
  age: 40,
};

let user2 = user1;

let user3 = { ...user1 };

user2.age = 50;
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user1 == user2);
console.log(user1 == user3);

/////
let arr1 = [1, 2, 3, 4];
let arr2 = [100, ...arr1, 200];

console.log(arr1);
console.log(arr2);
