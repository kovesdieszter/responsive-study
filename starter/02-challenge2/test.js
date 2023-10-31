const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

// const usernames = [];

// for (user of users) {
//   usernames.push(user.name);
// }

// users.forEach((user) => {
//   usernames.push(user.name);
// });

const usernames = users
  .filter((user) => user.isActive)
  .map((user) => user.name)
  .sort((user) => user.age);

console.log(usernames);
