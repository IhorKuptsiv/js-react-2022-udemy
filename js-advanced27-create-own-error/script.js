'use strict';

const data = [{
    id: 'box',
    tag: 'div'
  },
  {
    id: '',
    tag: 'nav'
  },
  {
    id: 'circle',
    tag: ''
  }
]

try {
  data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);

    // якщо даного ідентифікатора немає будемо використовувати throw
    //if (!blockObj.id) throw 'error';

    //Uncaught Error: В даних під номером 2 немає id
    if (!blockObj.id) throw new SyntaxError(`В даних під номером ${i +1} немає id`);


    block.setAttribute('id', blockObj.id);
    document.body.append(block);
  })

} catch (e) {
  if (e.name === "SyntaxError") {
    console.log(e.message); //В даних під номером 2 немає id
  } else throw e; //throw помилку викадиємо дальше з блоку
  //console.error(e.name); //SyntaxError 
  //console.log(e.stack); //SyntaxError: В даних під номером 2 немає id

}


//name, message, stack
//const err = new Error('ererererer');
// Error ererererer Error: ererererer

//SyntaxError ererererer SyntaxError: ererererer
//const err = new SyntaxError('ererererer');
//ReferenceError, TypeError,....
//console.log(err.name, err.message, err.stack);