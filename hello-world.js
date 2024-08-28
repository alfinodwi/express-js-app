// const text = 'Learning ES6';

// console.log(text);

// const name = 'Alfino Dwi';

// name = 'Andre Kurniawan';

// var name = 'alfino';

// if (true) {
//     let name = 'ahmad';
//     console.log(name);
// }

// console.log(name)

// function hello(message = 'Hello World!') {
// 	console.log(message);
// }
// //panggil function tanpa parameter
// hello(); // <-- output "Hello World!"

// //panggil function dengan parameter
// hello('Belajar ES6'); //<-- output "Belajar ES6"

// let name = 'Alfino Dwi ';

// let gender = 'Laki-Laki';

// console.log(`${name} Berjenis kelamin ${gender}`);

//define function
// function hello(name) {

// 	return `Hello ${name}`;
//     // console.log(`Hello ${name}`);
// }

// //panggil function
// const output = hello('Fika Ridaul Maulayya')
// console.log(output)

// //define function
// const hello = (name, umur) => ({
//     status: 'OK',
//     message: `Hello ${name} umur ${umur}`
// });

// //panggil function
// console.log(hello('Fika Ridaul Maulayya', 21))

//define function
// const hello = name => {

// 	if(!name) {
// 		console.log('Name is required');
//         return;
// 	}
	
// 	return `Hello ${name}`;
// }

// console.log(hello('andre'))

// function sum(...rest) {
//     let sum = 0;
//     for (let number of rest) sum += number;
//     return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

// function sum(initVal, ...rest) {
//     let sum = 0;
//     for (let number of rest) sum += number;
//     return initVal + sum;
//   }
  
//   let x = sum(10, 5);
//   console.log(x);


//define variable
// const names = 'Fika Ridaul Maulayya';
// const age = 25;

// //restructuring
// const obj = {names, age};

// //print output
// console.log(obj); // <-- {name: 'Fika Ridaul Maulayya', age: 25}

// const arr1 = [1,2,3];

// const arr2 = [4,5,6];

// const arr3 =[...arr1,...arr1]

// console.log(arr3)

//define array
// const arr = [1, 2, 3, 4, 5, 6, 7];

// //looping
// const number = arr.map( value => {
//   return value * 2;
// });

// //print output
// console.log(number);

//define variable
// let done = true;

// //define a promise
// const task = new Promise((resolve, reject) => {

// 	if(done) {
		
// 		resolve('Task berhasil diselesaikan');
		
// 	} else {
		
// 		reject('Task belum diselesaikan');
	
// 	}

// });

// // run promise with action
// task
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response))

// Fungsi untuk mengambil data cuaca
// function getWeather(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://api.restful-api.dev/objects?id=${id}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.error) {
//                     reject('Data tidak ditemukan');
//                 } else {
//                     resolve(data);
//                 }
//             })
//             .catch(error => reject('Terjadi kesalahan jaringan'));
//     });
// }

// // Menggunakan promise
// getWeather('1')
//     .then(data => {
//         console.log(`Data api:`, data, 'a');
//     })
//     .catch(error => {
//         console.log(error);
//     });

//define a promise with 3 seconds
const taskPromise = () => {
	return new Promise(resolve => {    
		setTimeout(() => resolve('Selesai'), 3000)  
	})
}

//define function "task" with async
const task = async () => {
	const done = await taskPromise();
	console.log(done);
}

//print
console.log('Mulai');
task();
console.log('Akhir');