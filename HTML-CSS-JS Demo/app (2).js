
let btns = document.querySelectorAll('button');

let display = document.querySelector('.display')

let result = "";

const show = (result) => {
     display.innerText = result;
}

btns.forEach((e) => {
     e.addEventListener('click', () => {
          switch (e.innerText) {
               case 'AC':
                    result = "";
                    show(result)
                    break;
               case 'DEL':
                    result = result.slice(0, -1)
                    show(result)
                    break;
               case '=':
                    show(eval(result))
                    break;
               default:
                    result += e.innerText;
                    show(result)
          }
     })
})
