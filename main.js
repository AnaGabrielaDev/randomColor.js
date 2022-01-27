const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    //get btwn 0-3
    const randomNumber = getRandomNumbers();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    colors.textContent = colors[randomNumber];
});

function getRandomNumbers () {
    return Math.floor(Math.random() * colors.length);
}