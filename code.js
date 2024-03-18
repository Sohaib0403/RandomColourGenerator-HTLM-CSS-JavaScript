const getColor = () => {
    //hex code for color: 
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    document.getElementById("btn").style.backgroundColor = randomCode;

}

document.getElementById("btn").addEventListener("click", getColor);

getColor();