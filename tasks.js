

// function checkingSimpleObject(obj) {


//     return !Array.isArray(obj)
// }

// console.log(checkingSimpleObject({}))


// function makePairs(obj) {
    
//     return  Object.keys(obj).reduce((accumulator, value, index, arr) => {
//         accumulator[index] = [value, obj[value]]
//         return accumulator
//     }, [])
// }

// console.log(makePairs({a: 1, b: 2, c:3, d: 4}))

// const aaa ={a: 1, b: 2, c: 3 }

// function Without(object, ...args) {
//     object = {...object}
    
//     args.forEach(item => {
//         if(Object.keys(object).includes(item)) {
//             delete object[item]
//         }
//     })
//     return object
// }

// console.log(Without(aaa, 'b', 'c'))


// function isEmpty(obj) {
 

//     return Object.values(obj).reduce((acc, item, index, arr) => {
//         if(typeof item !== 'undefined') {
//             acc = false
//             return acc
//         } else {

//             return acc
//         }
        
//     }, true)
     
// }

// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };
// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true





// function IsEqual(a,b) {
//     let result
//     for(key in a) {
//         result = a[key] == b[key]
//     }
//     return result
// }


// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(IsEqual(data, data2)); // true
// console.log(IsEqual(data, data3)); // false


// console.log('start'); // сначала это

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1) // потом это
// })

// console.log('end'); // потом это



// console.log('start'); //сначала это 1

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1) // потои это 2
//   resolve(2) 
// })

// promise1.then(res => {
//   console.log(res) // потом это 4 // только это асинхронное действие
// })

// console.log('end'); //потом это 3



// console.log('start');  // первым это

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)  // вторым это
//   resolve(2,)// третьим это
//   console.log(3) // четвертым это
// })

// promise1.then(res => {
//   console.log(res)  // шестым это
// })

// console.log('end'); // пятым это


// console.log('start'); // первым

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1) // вторым
// })

// promise1.then(res => {
//   console.log(2) // не отработает 
// })

// console.log('end'); // третьим



// console.log('start') // первым

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);// третьим
//   resolve('success')
// }))

// console.log('middle') // вторым

// fn().then(res => { // вызов функции с инициализацией промиса  и тогда отработает третья консоль (1)
//   console.log(res) // пятым
// })

// console.log('end') // четвертым


// console.log('start') // one

// Promise.resolve(1).then((res) => {
//   console.log(res) //three
// })

// Promise.resolve(2).then((res) => {
//   console.log(res) //four
// })

// console.log('end') //two

// console.log('start') //one 

// setTimeout(() => {
//   console.log('setTimeout') //four
// })

// Promise.resolve().then(() => {
//   console.log('resolve') //three
// })

// console.log('end') // two


// const promise = new Promise((resolve, reject) => { 
// // внутри код выполнится первее консоли с четверкой так как код выполняется синхронно
//     console.log(1); // one
//     setTimeout(() => {
//       console.log("timerStart"); //four
//       resolve("success");
//       console.log("timerEnd");//five
//     }, 0);
//     console.log(2); //two
// });
  
//   promise.then((res) => {
//     console.log(res); //six
//   });


  
//   console.log(4); // three





// const timer1 = setTimeout(() => {
//     console.log('timer1'); //one
    
//     const promise1 = Promise.resolve().then(() => {
//       console.log('promise1')  //two
//     })

// }, 0)
  
// const timer2 = setTimeout(() => {
//     console.log('timer2')//three
// }, 0)


// console.log('start'); //one

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1'); //three
//   const timer2 = setTimeout(() => {
//     console.log('timer2') //six
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1') //four
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2') //five
//   })
// }, 0)

// console.log('end'); //two


// Promise.reject()
//     // используем колбэки для .then и для .catch
//     .then(
//         data => console.log('ok'),   // => skip
//         data => console.log('error') // => "error"
//     )



// Promise.reject(1)
//     // skip
//     // обработать reject можно только в .catch
//     .then(data => {
//         console.log(data);
//     })

//     // второй аргумент .then вместо .catch
//     .then(null, data => console.log(data)) // => 1

//     // после обработки ошибки попадаем в .then
//     // => "ok"
//     .then(() => console.log('ok'));






// Promise.resolve("1")
//     // Promise.resolve вернул "1"
//     .then(data => {
//         console.log(data); // => "1"
//     })

//     // .then ничего не вернул
//     .then(data => {
//         console.log(data); // => "undefined"
//         return "2";
//     })

//     // .then вернул "2"
//     .then(data => {
//         console.log(data); // => "2"
//     })

// Promise.resolve("1")
//     // skip
//     .then(null)

//     // придут данные из Promise.resolve
//     .then(data => console.log(data)) // => "1"



// Promise.reject("Api Error")
//     // skip из-за Promise.reject
//     .then(data => console.log('ok'))

//     // обработка ошибки
//     .catch(error => {
//         console.log(error); // => "Api Error"
//         return "1";
//     })

//     // catch вернул "1"
//     .then(data => {
//         console.log(data); // => "1"
//     })





// Promise.reject()
//     // обработка Promise.reject
//     .catch(() => {
//         console.log('error1'); // => "error1"
//         return Promise.reject();
//         // аналогично
//         // return reject();
//     })

//     // обработка Promise.reject из предыдущего .catch
//     .catch(() => {
//         console.log('error2'); // => "error2"
//     })



// Promise.resolve()
//     .then(data => {
//         // возникновение ошибки
//         throw new Error('Api Error');
//         // не имеет значения, что вернули
//         return 1;
//     })

//     // skip, потому что предыдущий .then бросил ошибку
//     .then(data => console.log('ok'))

//     // обработка ошибки
//     .catch(error => {
//         console.log(error.message); // => "Api Error"
//         return "2";
//     })

//     // .catch вернул "2"
//     .then(data => {
//         console.log(data); // => "2"
//     })


//Необработанная ошибка в Promise не влияет на работу программы, т.к. Promise не выпускает ошибку за свои пределы.
// Promise.resolve()
//     .then(() => {
//         throw new Error('Api Error');
//     })

// // код будет работать
// setTimeout(() => {
//     console.log('setTimeout'); // => "setTimeout"
// }, 1000);







// Promise.reject("Api Error")
//     // skip: ошибку не обработали
//     .catch(null)

//     // skip из-за необработанной ошибки
//     .then(data => console.log('ok'))

//     // обработка ошибки
//     .catch(error => console.log(error)) // => "Api Error"

//     // .then выполнится
//     .then(data => console.log('ok')) // => "ok"


// Promise.resolve()
//     .then(() => {
//         return "1";
//     })

//     // .then вернул "1", но .finally пропустит его мимо себя
//     .finally(data => { 
//         console.log(data); // => "undefined"
//         return "2";
//     })

//     // из .finally вернули "2", но результат берется из предыдущего .then или .catch
//     .then(data => console.log(data)) // => "1"

// Promise.reject()
//     // .finally выполняется в любом случае: даже при возникновении ошибки
//     .finally(data => { 
//         console.log('finally'); // => "finally"
//     })


// // В каком порядке будут выведены консоли и какие именно?
// const p = new Promise((resolve, reject) => {
//     reject(Error('Всё сломалось :('));
//   })
//     .catch((error) => console.log('1-я', error.message))
//     .catch((error) => console.log('2-я', error.message));



// // в каком порядке будут выведены консоли и что в них будет?
// setTimeout(() => {
//     console.log('timeout') //seven
// }, 0);
  
// const p = new Promise((resolve, reject) => {
//     console.log('Promise creation'); //one
//     resolve()
// })
  
// const p2 = new Promise((resolve, reject) => {
//     console.log(123) //two
// })
  
// p.then(() => {
//     console.log('Promise resolving'); //six
// })
  
//   console.log('End') //three
  
//   console.log('p2 =>>', p2) //four



