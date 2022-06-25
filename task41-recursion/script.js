
//https://ru.hexlet.io/courses/introduction_to_programming/lessons/recursion/theory_unit
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values

//Рекурсія - функція викликає сама себе

//pow(2, 2) //4  --- 2 в 2 степені =4
//pow(2, 3) //8 
//pow(2, 4) //16 


// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++){
//     result *= x;
//   }
//   return result;
// }


// рекурсія
// function pow(x, n) { //n- глибина рекурсії - кількість викликів
//   if(n === 1){   // база рекурсії   n= 1 -  метод який приводить до завершення рекурсії
//     return x;
//   }else{
//     return x * pow(x, n-1); // крок рекурсії n зменшується на 1
//   } 
// }

//console.log(pow(2,3));

// pow(2, 1)//2
// pow(2, 2)//4
// pow(2, 3)//8
// pow(2, 4)//16



let students = {
  js: [{
    name: 'John',
    progress: 100
  }, {
    name: 'Ivan',
    progress: 60
  }],

  html:{
    basic : [{
    name:'Peter',
    progress: 20
  },{
    name: 'Ann',
    progress:18
  }],
  
  pro: [{
    name: 'Sam',
    progress: 10
  }],
  semi:{
    students: [{
      name: 'Test',
      progress: 100
    }]
  }
}
};

// рахуємо середній прогрем
// скільки всіх студентів, і загальне число ділимо на кількість студентів

//цикли
function getTotalProgressByIteration (data){
  let total = 0;
  let students = 0;

// Object.values() - получаємо масив значень  свойств обєкта
//for of  - обєкт перетворюємо в масив з значеннями name John progres.....
// кожен елемент масиву записуєм в - course
for(let course of Object.values(data)){    // получаємо значення обєкту
//Array.isArray() - перевірка чи що є масивом
  if (Array.isArray(course)){  // перевіряємо чи це масив
    students += course.length; // якщо масив виконуємо ці операціЇ

    // витягуєм з масиву  progress: і значення число
    for(let i = 0; i < course.length; i++){
      total += course[i].progress;
    }
  }else{   // якщо обєкт то ці опирації виконуємо
    for(let subcourse of Object.values(course)){
      students += subcourse.length;
      for(let i = 0; i < subcourse.length; i++){
        total += subcourse[i].progress;
      }
    }

  }
}



  return total / students;
}



//console.log(getTotalProgressByIteration(students));

// рекурсія

function getTotalProgressByRecursion(data){
  if (Array.isArray(data)){  // перевіряємо чи це data - масив
    let total = 0;

    for(let i = 0; i < data.length; i++){// складуємо всі прогреси в 1 змінну
      total += data[i].progress;
    }

    return [total, data.length];// повертаємо масив

  }else{ //------- рекурсія
   let total = [0, 0];

   for ( let subData of Object.values(data)){ // звертаємось до кожного значення
    //!!! запускаємо функцію на вложених даних заново
    // запускаємо рекурсію доки вона не дойде до БАЗИ - до останнього студента
    const subDataArr = getTotalProgressByRecursion(subData);
    total[0] += subDataArr[0];
    total[1] += subDataArr[1];

  }

  return total;
  }
}


const result = getTotalProgressByRecursion(students);// результат масив з прогресом і студентами

//загальний прогрес ділимо на загальну кількість студентів
console.log(result[0]/result[1]);