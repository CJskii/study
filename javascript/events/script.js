const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World")
})


/* Note that all 3 of these methods can be used with named functions like so:

<!-- the HTML file -->
<!-- METHOD 1 -->
<button onclick="alertFunction()">CLICK ME BABY</button>
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction); */

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function(e){
    console.log(e)
})

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function(e){
    console.log(e.target);
})

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function(e){
    e.target.style.background = 'blue'
});