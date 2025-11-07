const input = document.querySelector('input');
const add = document.querySelector('.add');
const list = document.querySelector('.list');

add.addEventListener('click', () => {
     const li = document.createElement('li')
     li.innerHTML = input.value + "<button>X</button>";
     if (input.value) {
          list.appendChild(li)
          input.value = '';
     }
})

list.addEventListener('click', (e) => {
     if (e.target.tagName == 'LI') {
          if (e.target.style.textDecoration == "line-through") {
              e.target.style.textDecoration = 'none'
          } else {
               e.target.style.textDecoration = "line-through"
               e.target.style.color = "red"
          }
     }
     if (e.target.tagName === 'BUTTON') {
          e.target.parentElement.remove()
     }

})