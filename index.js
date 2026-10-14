// let student = {
//     firstname: "Azbayar",
//     lastname: "Tumur",
//     age: 20,
//     isStudent: true,
// }
// console.log(student)

// let friuts = [
//  'алим', `Банана`, `Жүрж`,
// ]
// console.log(friuts)

// let person = {
//     name: "Ану",
//     age: 20,
// }
// console.log(person.name)

// let colors = [
//     "Улаан", "Ногоон", "Цэнхэр"
// ]
// console.log(colors.indexOf("Улаан",0))

// let product = {
//     name: "Note",
//     price: 2500
// }
// console.log(product["price"])

// let students = ["Бат","Ану","Болд"]
// console.log(students [1]))

// let person = {
//     name: "Бат",
//     age: 18
// }
// console.log("Бат 18 настай")

// let animals = ["Нохой", "Муур", "Туулай", "Морь"]
// console.log(animals.length)

// let number = [10,20,30,40,50]
// console.log(number [4])

// let student = {
//     name: "Сараа",
//     age: 16,
//     grade: 10,
// }; 
// const key = "grade"
// console.log(student[key]);

// let friuts = ["Алим", "Банана", "Жүрж"]
// friuts [1] = "Усан үзэм"
// console.log(friuts)

// let person = {
//     name: "Болд",
//     age: 17,
// }; 
// if (18<= person.age)
//    person.isAdult = true;
// else {
//     person.isAdult = false;}
//  console.log(person)

// const books = ["Математик", "Англи хэл"]
// books.push("Программчлал") 
// console.log(books)

// let student = {
//     name: "Ану",
//     age: 15,
// }
// student.grade = 9
// console.log(student)

// let player = {
//     name: "Тэмүүлэн",
//     score: 100
// }
// if (player.score>= 100){
//     player.score +=50;
// }else {
//     score += 10;
// }
// console.log(player.score)

// let items = ["Дэвтэр", "Бал", "Баллуур"]
// items.pop(2)
// removeditem = "Баллуур"
// console.log(items, removeditem)

// let queue = ["Бат", "Ану"]
// queue.unshift("Болд")
// console.log(queue)

// let lamp = { isOn: false}
// if (lamp.isOn){
//     lamp.isOn = false
//     console.log("Гэрлтйг унтраалаа")
// }else {
//     lamp.isOn = true;
//     console.log("Гэрлийг асаалаа")
// }
// console.log(lamp.isON)

// let queue = ["Болд", "Бат", "Ану"]
// queue.shift("Болд")
// firstPerson= "Болд"
// console.log(queue, firstPerson)

// let user = {
//     name: "Бат",
//     isVerified: true,
//     temporaryCode: "ABC123"
// }
// if (user.isVerified) {
//     delete user.temporaryCode;
// } else {
//     console.log("Эхлээд бүртгэлээ баталгаажуулна уу"); }
// console.log(user); 

// const product = {
//     name: "Дэвтэр",
//     price: 2500,
//     quantify: 4
// }
// console.log(product.price * product.quantify)

// const rectangle = { width: 5, height: 8 }
// rectangle.area = rectangle.width * rectangle.height
// console.log(rectangle)

// const scores = { math: 80, english: 90, programming: 100 }
// console.log((scores.math + scores.english + scores.programming) / 3 )

// const product = { price: 50000, discountPercent: 20 }
// if (product.discountPercent > 0 ) {
//     product.finalPrice = product.price - (product.price * product.discountPercent) / 100;
// } else {
//     product.finalPrice = product.price;
// }
// console.log(product.finalPrice);

// const account = { owner: "Болд", balance: 50000 }, withdrawAmount = 60000;
// if (account.balance >=withdrawAmount) {
//     account.balance -=withdrawAmount
//     console.log("Гүйлгээ амжилттай")
// }else {
//     console.log("Үлдэгдэл хүрэлцэхгүй")
// }
// console.log(account.balance)

// const product = { name: "Бал", stock: 0 };
// console.log(product.stock > 0 ? "Бэлэн байна" : "Дууссан");

// const numbers = [15, 25, 10];
// console.log(numbers[0] + numbers[1] + numbers[2]);

// const scores = [80, 90, 100];
// console.log((scores[0] + scores[1] + scores[2]) / scores.length);

// const customer = { money: 10000 };
// const product = { price: 8000, stock: 3 };
// if (customer.money >= product.price && product.stock > 0) {
// console.log("Авч болно");
// } else {
// console.log("Авч болохгүй");

// const student = { name: "Сараа", score: 85 };
// if (student.score >= 90) {
// console.log("Маш сайн");
// } else if (student.score >= 60) {
//     console.log("Тэнцсэн");
// } else {
// console.log("Тэнцээгүй");}

// const student = { name: "Бат", age: 16 }
// console.log("age"in student,"email" in student)

// const person = { name: "Болд", address: { city: "Улаанбаатар", district: "Хан-Уул" } }
// console.log(person.address.city)

// const person = {name: "Ану",address: { city: "Улаанбаатар", district: "Баянзүрх" }};
// if (person.address.city === "Улаанбаатар") {
//     console.log(person.address.district);
// } else {
//     console.log("Орон нутгийн оршин суугч");}

// const student = { name: "Бат", scores: { math: 70, english: 80 } };
// if (student.scores.math < 80) {
//     student.scores.math += 10;
// } else {
//     console.log("Нэмэлт оноо шаардлагагүй");
// }
// console.log(student.scores.math); // 80

// const names = ["Бат", "Ану"];
// const temp = names[0];
// names[0] = names[1];
// names[1] = temp;
// console.log(names);

// const fruits = ["Алим", "Банана", "Жүрж"];
// if (fruits.includes("Банана")) {
//     console.log("Банана байна");
// } else {
//     console.log("Банана алга");}

// const students = ["Бат", "Ану", "Болд", "Сараа"];
// console.log(students.indexOf("Болд"));

// const order = {
//     product: { price: 5000, quantity: 3 },delivery: { fee: 2500 }
// };
// const niilber= order.product.price * order.product.quantity;
// if (niilber >= 20000) {
//     order.delivery.fee = 0;}
// order.total = niilber + order.delivery.fee;
// console.log(order.total); 

// const user1 = { name: "Болд", age: 20 }, user2 = { email: "bold@example.com", city: "Улаанбаатар" }
// const user = Object.assign( user1, user2);
// console.log(user);

// const cart = [];
// if (cart.length === 0) {
//     console.log("Сагс хоосон");
// }else {
//     console.log("Сагсанд бараа байна");
// }

// const numbers = [35, 20];
// if (numbers[0] > numbers[1]) {
//     console.log(numbers[0]);
// } else if (numbers[1] > numbers[0]) {
//     console.log(numbers[1]);
// }else {
//     console.log("Хоёр тоо тэнцүү");}

const students = ["Бат", "Ану"], newStudent = "Сараа"
if (students.includes(newStudent)){
    students.push(newStudent)
}else {
    console.log("Энэ нэр бүртгэлтэй байна")
}
console.log(students)

// const user1 = { name: "Ану", age: 18 }, user2 = { email: "anu@example.com", city: "Улаанбаатар" }
// const user = { ...user1, ...user2}
// console.log(user)

// const groupA = ["Бат", "Ану"], groupB = ["Болд", "Сараа"]
// const allStudents = groupA.concat(groupB)
// console.log(allStudents)

// const original = [10, 20, 30]
// const copied = [...original]
// copied [0] = 99
// console.log(original, copied)

// const numbers = [10, 20, 30, 40, 50]
// const newNumber = numbers.slice(1 , 4)
// console.log(newNumber)

// const user = { name: "Сараа", age: 22, email: "saraa@example.com" }
// const profile ={name: user.name , gae:user.age}
// profile.name = "Бат"
// console.log(profile.name , user.name)

// const colors = ["Улаан", "Ногоон", "Цэнхэр", "Шар"]
// colors.splice(colors.indexOf("Ногоон"),1)
// console.log(colors)

// const days = ["Даваа", "Лхагва"];
// days.splice(1, 0, "Мягмар");
// console.log(days);

// const words = ["Би", "JavaScript", "сурч", "байна."]
// console.log(words.join(" "))

const students = [{ name: "Бат", score: 75 }, { name: "Ану", score: 90 }]
