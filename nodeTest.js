// //Getting Serious with classes and OOP

// class Person {
//   constructor(height, complextion, age) {
//     this.height = height;
//     this.complextion = complextion;
//     this.age = age;
//   }

//   animatePerson() {
//     console.log(
//       `Mark is ${this.height}cm tall and he is ${
//         this.complextion
//       } in complextion  ${
//         this.YearOfStudy ? "and he is in " + this.YearOfStudy : ""
//       }`
//     );
//   }

//   //A static Method to check if two person instatiated from the Person class are the same
//   // static checkProperties(person_a, person_b) {
//   //   return (
//   //     person_a.height === person_b.height &&
//   //     person_a.complextion === person_b.complextion &&
//   //     person_a.age === person_b.age
//   //   );
//   // }

//   //Using setter to create a method
//   // set person(height) {
//   //   this.height = height;

//   //   console.log(`New height is ${this.height}`);
//   // }
// }

// //A child classs that inherits from The person class
// class Student extends Person {
//   constructor(height, complextion, age, YearOfStudy) {
//     super(height, complextion, age);
//     this.YearOfStudy = YearOfStudy;
//   }
// }

// //Creating two instance objects from the Person's Class
// const person_1 = new Person(182, "light skin", 21);
// // const persom_2 = new Person(182, "light skin", 21);

// const student_1 = new Student(177, "Chocolate", 20, "3rd year");

// student_1.animatePerson();

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.write("Hellos Node world");
//   res.end();
// });

// server.listen(1000);

// console.log("hellp");

// const { readFileSync } = require("fs");

// const homePage = readFileSync("./navbar/index.html", "utf8");

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end(homePage);
//   } else if (req.url === "/about") {
//     res.end("About the Great Emmanuel kumah");
//   } else {
//     res.end("<h1>Page not found</h1>");
//   }
// });

// server.listen(5000);

// console.log("Hello");

// const { application } = require("express");
// const express = require("express");

// const { products } = require("./products");

// // const path = require("path");
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static("./public"));

// app.get("/api/request", (req, res) => {
//   res.json(products);
// });

// app.post("/login", (req, res) => {
//   const { name } = req.body;
//   console.log(name);
//   return res.status(201).json({ status: "success", msg: [name] });
//   c;
// });

// app.post("/api/request/post", (req, res) => {
//   const { name } = req.body;
//   console.log(req.body);
//   return res.status(201).json({ data: name });
// });

// app.put("/api/request/:id", (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   const person = products.filter((items) => {
//     return Number(id) === items.id;
//   });

//   const updatePerson = person.map((eachPerson) => {
//     if (eachPerson.id === Number(id)) {
//       return { ...eachPerson, first_name: name };
//     } else {
//       return eachPerson;
//     }
//   });

//   res.json(updatePerson);
// });

// app.delete("/api/request/:id", (req, res) => {
//   const { id } = req.params;
//   const newProduct = products.filter((product) => {
//     return product.id !== Number(id);
//   });
//   res.status(200).json(newProduct);
// });

// app.listen(5000, () => {
//   console.log("Server Started");
// });

// app.use(express.static("./publick"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("./navbar/index.html"));
// });

// app.get("/", (req, res) => {
//   res.end("<h1>HomePage</h1> <br/> <a href ='api/get-products'>Products</a>");
// });

// app.get("/api/get-products/query", (req, res) => {
//   const { id, name, search } = req.query;
//   console.log(search);
//   const newProducts = products.filter((product) => {
//     return product.first_name.startsWith(search);
//   });
//   res.status(200).json(newProducts);
// });
// app.listen(5000);

const products = require("./Products");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(3000, () => {
  console.log("Server started");
});
