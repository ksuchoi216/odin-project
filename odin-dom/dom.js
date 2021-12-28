const sec1 = document.querySelector('#sec1');

const p = document.createElement('p');
p.textContent = 'Hey I\'m red';
p.style.color = 'red'
sec1.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = 'I\m a blue h3';
h3.style.color = 'blue'
sec1.appendChild(h3)

const div = document.createElement('div');
div.style.backgroundColor = 'pink'
div.style.border = '2px solid black'
sec1.appendChild(div)

const div_container = document.querySelector('div')

const h1 = document.createElement('h1');
h1.textContent = 'I\m in a div';
div.appendChild(h1)

const p1 = document.createElement('p1');
p1.textContent = 'ME TOO';
div.appendChild(p1)
