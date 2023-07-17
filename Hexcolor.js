const randomColor = () =>{
    const randomNum = Math.floor(Math.random() * 16777215);
    const randomHex = "#" + randomNum.toString(16);
    document.body.style.backgroundColor = randomHex;
    document.getElementById("hexcolor").innerText = randomHex;
    navigator.clipboard.writeText(randomHex)
}


document.getElementById("button").addEventListener(
    'click',
    randomColor
)


randomColor();