/*1. Вивести в консоль квадрати чисел від 1 до 10 (за допомогою циклу)*/

// for (let i = 1; i <= 10; i++) {
//     console.log(i**2)
// }

/*2. Написати функцію, яка запитує через prompt пароль користувача, порівнює його з тим, який у неї збережений (захардкоджений у константі). Якщо пароль співпав - виводить на консоль “Ви успішно увійшли в систему”, якщо ні - продовжує запитувати пароль і перевіряти, поки не введуть правильно (за допомогою вічного цикла) */

const TRUE_PASSWORD = 'qwerty123'


function passwordCheckout() {
  let password
  while (password !== TRUE_PASSWORD) {
    password = prompt('Please enter password')
  }
  console.log('Ви успішно увійшли в систему')
}
passwordCheckout()

//3. Обчислити сумму чисел від 1 до 100 і вивести її в консоль

// let sum = 0
// let i = 1

// while (i<=100) {
    
//     sum += i
//     i++
// }
// console.log('sum :>> ', sum);

//4. Вивести числа від 10 до 50, які кратні 5.

// for (let i = 10; i <= 50; i+=5) {
//     console.log('i :>> ', i);
    
// }

/*5. Намалювати в консолі символами “*” трикутник заданого користувачем розміру

*
**
***
****
*****
******
*/

// let row = Number(prompt("Please enter the height of the triangle"));
// let element = '*'
// let start = ''
// for (let i = 1; i <=row; i++) {
//     start += element;
//     console.log(start);
    
// }

//6. Намалювати пустий квадрат з діагоналлю (зліва зверху - до права низу)

// let side = 9
// let pattern = "";
 

// for (let n = 1; n <= side; n++) {
//    for (let num = 1; num <= side; num++) {
      
//       if (n == 1 || n == side) pattern += "+";
//       else {
//          if (num == 1 || num == side || n == num) {
//             pattern += "+";
//          } else {
//             pattern += " ";
//          }
//       }
//    }
//    pattern += "\n";
// }
// console.log(pattern);

/*7. Задачка з *: Зробити квадрат зі зворотньою діагоналлю (з правого верхнього до лівого нижнього)
 */

// let side = 9;
// let pattern = "";

// for (let n = 1; n <= side; n++) {
//   for (let num = 1; num <= side; num++) {
//     if (n == 1 || n == side) pattern += "*";
//     else {
//       if (num == 1 || num == side || (n + num) == (side+1)) {
//         pattern += "*";
//       } else {
//         pattern += " ";
//       }
//     }
//   }
//   pattern += "\n";
// }
// console.log(pattern);