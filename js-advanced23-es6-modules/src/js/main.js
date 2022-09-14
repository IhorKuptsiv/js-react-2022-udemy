//експортуємо з main в script

//варіант 1. експортуємо змінну one
export let one = 1;

//варіант 2. експортуємо змінну two
let two = 2;
export {
    two
};

//варіант 3. експорт функції
//export function sayHi() {
//   console.log('Hello');
//}

// експорт по замовчуванню (тільки один)
export default function sayHi() {
    console.log('Hello');
}