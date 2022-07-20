// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.style.color = 'red'
paragraph.textContent = "Hey I'm red"

container.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "Hey I'm blue"

container.appendChild(h3);



const divider = document.createElement('div');
divider.style.cssText = 'background: pink; border: 1px solid black'

const head = document.createElement('h1');
head.textContent = "I'm in a div"

const para = document.createElement('p')
para.textContent = "ME TOO!"

divider.appendChild(head);
divider.appendChild(para);
container.appendChild(divider);