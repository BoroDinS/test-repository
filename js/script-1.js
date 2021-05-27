
// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
//   { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
//   { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
// ];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map((student) => student.name);

// console.log(sortedByAscendingScore);
// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']





// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];


// const countLikes = tweets => {
//   return tweets.reduce((acc, tweet) => acc + tweet.likes, 0)
// };

// console.log(countLikes(tweets));




// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
// .filter((book, index) => book.rating >= MIN_BOOK_RATING)
// .map((book) => book.author)
// .sort((a,b) => a.localeCompare(b));
// console.log(names);





//MODUL 6. 1/44
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach (function (orderedItem){
//   totalPrice += orderedItem;
//   });
//   // versiya so strelkoy   orderedItems.forEach ((orderedItem) => totalPrice += orderedItem);
 
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


//MODUL 6. 2/44
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     numbers.forEach(function(number) {
//     if(number > value){
//     filteredNumbers.push(number);
//     }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));



//MODUL 6. 3/44
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
 
  
//   firstArray.forEach(element => {
//   if (secondArray.includes(element)) {
//   commonElements.push(element);
//   }                   
//   });
  
//     return commonElements;
//     // 
//   //Пиши код выше этой строки
//   }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));





//MODUL 6. 4/44

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players
//   .reduce((acc, player) => (acc + player.playtime / player.gamesPlayed), 0);

// console.log(totalAveragePlaytimePerGame);


//MODUL 6. 4/44

// const users =
// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//   return users.reduce((acc, user, index) => acc + user.friends.length , 0); 
// };
// // Пиши код выше этой строки
// console.log(getTotalFriendCount(users));


// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//   return [...users]
//  .sort((a,b) =>  a.friends.length - b.friends.length) 
//  .map((user) => user.name);
// };
// // Пиши код выше этой строки
// console.log(getNamesSortedByFriendCount(users));




//MODUL 6. 26/44

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray
// .every((element) => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray
// .every((value) => value % 2 === 1);

// const eachElementInSecondIsEven = secondArray
// .every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray
// .every((el) => el % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray
// .every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray
// .every((el) => el % 2 !== 0);




//MODUL 6. 6/44

// const users = 
// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ]
// // Пиши код ниже этой строки
// // const getFriends = (users) =>
// //   users.flatMap((user) => user.friends)
// //     .filter((friend, index, self) => self.indexOf(friend) === index);
  
//     const getFriends = (users) => { 
//  return users
// .flatMap((user) => user.friends)
// .filter((friend, index, self) => self.indexOf(friend) === index);
   
// };
  
// // Пиши код выше этой строки
// console.log(getFriends(users));


// const getInactiveUsers = (users) => {
//   return users.filter((user) => !user.isActive); 
// };


// Пиши код ниже этой строки
// const getSortedFriends = users => {
//   return users
//     .flatMap((user) => user.friends)
//     .sort((a, b) => a.localeCompare(b))
//     .filter((friend, index, self) => self.indexOf(friend) === index);
// };
// // Пиши код выше этой строки
// console.log(getSortedFriends(users));


// Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//   .filter((user) => user.gender === gender)
//   .reduce((acc, user) => acc + user.balance, 0);
// };
// // Пиши код выше этой строки
// console.log(getTotalBalanceByGender(users, 'male'));
// console.log(getTotalBalanceByGender(users, 'female'));





//MODUL 6. 7/44

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter((genre, index) => allGenres.indexOf(genre) === index);
  
// console.log(allGenres);
// console.log(uniqueGenres);



//MODUL 6. 8/44


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);


//MODUL 6. 9/44

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap((book) => {
//   return book.genres;
//   });




//MODUL 6. 10/44

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books.map((book) => book.title);
// console.log(titles);





// const vehicals = [
//   {brand:'Audi', model:'Q7', type: 'suv', quantity: 4, price: 25.000, onSale: true},
//   {brand:'Audi', model:'Q3', type: 'suv', quantity: 5, price: 21.000, onSale: false},
//   {brand:'Skoda', model:'Superb', type: 'sedan', quantity: 5, price: 29.000, onSale: true},
//   {brand:'Skoda', model:'Octavia', type: 'sedan', quantity: 7, price: 26.000, onSale: true},
//   {brand:'BMW', model:'X5', type: 'suv', quantity: 1, price: 34.000, onSale: false},
//   {brand:'BMW', model:'X1', type: 'suv', quantity: 3, price: 21, onSale: true},
//   {brand:'Honda', model:'CR-V', type: 'suv', quantity: 10, price: 25.000, onSale: false},
//   {brand:'Honda', model:'Civic', type: 'sedan', quantity: 5, price: 19.000, onSale: true},
//   {brand:'Ford', model:'Fiesta', type: 'sedan', quantity: 7, price: 15.000, onSale: false},
//   {brand:'Ford', model:'Kuga', type: 'suv', quantity: 2, price: 28.000, onSale: true},
// ];

// const getModels = cars => cars.map(car => car.model);
// console.log(getModels(vehicals));

// // const filterByQuantity = cars => cars.filter(car => car.quantity > 5);
// // console.log(filterByQuantity(vehicals));

// const filterByQuantity = (cars, quantity) => cars.filter(car => car.quantity > quantity);
// console.log(filterByQuantity(vehicals, 5));

// const filterByPrice = (cars, levelPrice) => {
//   return cars.filter(car => car.price > levelPrice);
// };
// console.log(filterByPrice(vehicals, 25.000));

// const getCarsOnSaleByPrice = (cars, minPrice) => {
//   return cars.filter(car => car.price < minPrice && car.onSale);
// };
// console.log(getCarsOnSaleByPrice(vehicals, 25.000));

// const findTheCar = (cars, model) => {
//   return cars.find(car => car.model === model);
// };
// console.log(findTheCar(vehicals, 'Superb'));

// const getTotalQuantity = cars => {
//   return cars.reduce((acc, car) =>  acc + car.quantity, 0);
// };
// console.log(getTotalQuantity(vehicals));

// const sortByAscending = (cars) => {
//   return [...cars].sort((a, b) => a.quantity - b.quantity)
// };
// console.log(sortByAscending(vehicals));

// const sortByDescending = (cars) => {
//   return [...cars].sort((a, b) => b.quantity - a.quantity)
// };
// console.log(sortByDescending(vehicals));




// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(function(elementOffirstArray){
//       if (elementOffirstArray === secondArray.element) {
//         console.log(elementOffirstArray);
//         console.log(secondArray.element);
//     commonElements.push(elementOffirstArray);
//     }                  
//     }, secondArray.forEach(element => console.log(element)));
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));





// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));



// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150
// };

// const valuesOfSalary = Object.values(salary);
// const totalSalary = valuesOfSalary.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(totalSalary);



// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((acc, value) => acc + value, 0);
// console.log(total);





// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const playerNames = players.map(player => player.name);
// //console.log('playerNames', playerNames);

// const playerIds = players.map(player => player.id);
// //console.log('playerIds', playerIds);

// const status = players.map(({ name, online }) => ({ name, online}));
// //console.log('status', status);

// const updatedPlayers = players.map(player => ({...players, points: player.points * 0.5}));

// //console.log('updatedPlayers', updatedPlayers);

// const playerId = 'player-3';

// // const updatedPointsById = players.map(player => {
// //   if (playerId === player.id) {
// //     return {
// //       ...player,
// //       timePlayed: player.timePlayed + 100,
// //     };
// //   }
// //   return player;
// // });
  
// const updatedPointsById = players.map(player =>
//   playerId === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );

// console.table(players);
// console.log('updatedPointsById', updatedPointsById);



//ES5
// const HIERARCHY_LEVEL = {
//   TOP: 'top',
//   BOTTOM: 'bottom'
// };

// const Worker = function (name, surName, age, position, salary) {
//   this.name = name;
//   this.surName = surName;
//   this.age = age;
//   this.position = position;
//   this.salary = salary;
// };

// Worker.prototype.getSalary = function () {
//  return this.salary;
// };
// const TopLevelWorker = function (name, surName, age, position, salary, hierarchyLevel) {
//   Worker.call(this, name, surName, age, position, salary);
//   this.hierarchyLevel = hierarchyLevel;
// };

// TopLevelWorker.prototype = Object.create(Worker.prototype);
// TopLevelWorker.prototype.constructor = TopLevelWorker;

// const worker1 = new TopLevelWorker('Sergii', 'Borodin', 32, 'Developer', 26.500, HIERARCHY_LEVEL.BOTTOM );
// console.log(worker1);
// console.log(worker1.getSalary());


// class Notes {
//   constructor(text, priority) {
//     this.text = text;
//     this.priority = priority;
//   }

// }




// class Client {
//   constructor({ login, email }){
//   this.login = login;
//   this.email = email;
// }
//  get getData() {
//     return {
//       login: this.login,
//       email: this.email,
//     }
//   }

//   set changeLogin(newLogin) {
//     this.login = newLogin;
//   }

//   set changeEmail(newEmail) {
//     if (newEmail.includes('@')) {
//       this.email = newEmail;
//     } else {
//           console.warn('Inappropriate format of email');
//     }
//   }
// }

// const client1 = new Client({ login: 'Boroda', email: 'serega_borodin@mail.ru' });
// console.log(client1);
// console.log(client1.getData);
// client1.changeLogin = 'Borodulya';
// console.log(client1.getData);
// client1.changeEmail = 'sergii.borodin@yahoo.com';
// console.log(client1.getData);





// class Client {

//   #login = '';
//   #email = '';

//   get getData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     }
//   }

//   set changeLogin(newLogin) {
//     this.#login = newLogin;
//   }

//   set changeEmail(newEmail) {
//     if (newEmail.includes('@')) {
//       this.#email = newEmail;
//     } else {
//           console.warn('Inappropriate format of email');
//     }
//   }
// }

// const client1 = new Client();
// console.log(client1);
// console.log(client1.getData);
// client1.changeLogin = 'Borodulya';
// console.log(client1.getData);
// client1.changeEmail = 'sergii.borodin@yahoo.com';
// console.log(client1.getData);







// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItems(newItem) {
    
    
//       this.items.push(newItem);
    
    
//     return this.items;
//   }

//   removeItem(itemToRemove) {
//     this.itemToRemove = itemToRemove;
//     for (let i = 0; i < this.items.length; i++) {
//       const item = this.items[i];
//       if (item === this.itemToRemove) {
//         this.items.splice(i, 1);
//       }
      
//     }
//     return this.items;
//   }
// }
// const mainStorage = new Storage(['iPad', 'iPod']);
// console.log(mainStorage.getItems());
// console.log(mainStorage.addItems('iPhone'));
// console.log(mainStorage.getItems());
// console.log(mainStorage.addItems('airPods'));
// console.log(mainStorage.removeItem('iPhone'));
// console.log(mainStorage.getItems());





// class User {
//   constructor({ userName, age, numberOfPosts } = {}) {
//     this.userName = userName,
//     this.age = age,
//     this.numberOfPosts = numberOfPosts
//   }
//   getInfo() {
//     return `User ${ this.userName } is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
// }
// const sergii = new User({userName : 'Sergii', age : 32, numberOfPosts : 100});
// console.log(sergii.getInfo());

// const anastasiia = new User({userName : 'Anastasiia', age : 30, numberOfPosts : 200});
// console.log(anastasiia.getInfo());


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
//   blacklistedEmails;

//   constructor({ email, accessLevel, blacklistedEmails }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
  
//   blacklist(email){
//   this.blacklistedEmails.push(email);
//   }
  
//   isBlacklisted(email) {
//   if(this.blacklistedEmails == email){
//   return true;
//   }
//     return false;
//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки

// class Admin extends User {
// AccessLevel = {
//   BASIC: 'basic', 
//   SUPERUSER: 'superuser'}
// };
// Admin.AccessLevel.BASIC;
// Admin.AccessLevel.SUPERUSER;






// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//     this.#price = newPrice;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000




// class Storage{
//   #items
//  constructor(items) {
//  this.#items = items;
//  }

// getItems() {
//   return this.#items;
// }

// addItem(newItem) {
//   this.#items.push(newItem);
// }

// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
//  }
// }
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]






// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//   getPrice() {
//   return this.price;
//   }
  
//   changePrice(newPrice) {
//   this.price = newPrice;
//   }
// }

// aCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// console.log(aCar.getPrice());
// aCar.changePrice(35000);
// console.log(aCar.getPrice());





// function StringBuilder(baseValue) {
// this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
// return this.value;
// };

// StringBuilder.prototype.padStart = function (str) {
// return this.value = str + this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   return this.value = this.value += str;
//   console.log();
// };

// StringBuilder.prototype.padBoth = function (str) {
// return this.value = str += this.value += str;
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='





// function Storage(items) {
// this.items = items;
// }

// Storage.prototype.getItems = function() {
// return this.items;
// };

// Storage.prototype.addItem = function(newItem) {
// this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (itemToRemove) {

// for (let i = 0; i < this.items.length; i++) {
//   if (itemToRemove === this.items[i]){
//     this.items.splice(i, 1);
//   }
//   } return this.items;
// };
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]




// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function() {
// return this.price;
// };
// Car.prototype.changePrice = function(newPrice) {
// this.price = newPrice;
// };

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// audi.getPrice();
// audi.changePrice(35000);
// audi.getPrice();







// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const audi = new Car({brand: 'Audi', model: 'Q3', price: 3600});
// const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(audi);
// console.log(bmw);
// console.log(nissan);





// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(messages, [i + 1]);
//   messages.push(msg);
// }
// console.log(messages);






// function makeShef(shefName) {
//   return function makeDish(dishName) {
//     console.log(`Attantion ${shefName} cook ${dishName}`);
//   }
// }
// const makeDishWithShef = makeShef('Anatolii');

// makeDishWithShef('lasangiya');
// makeDishWithShef('pasta');



// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//   }
  
//   product.id = Math.random;

//   console.log(product);

//   return callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct('PS5','4300',showProduct);

