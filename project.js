//generate a random color

const randomColor = function () { // sabse pahle apan ne random color ka ek function lia 
    const hex = '0123456789ABCDEF'; // fir hex form me apan ne colors lie jitne bhinhote hai 16 hote hai
    let color = '#'; // final color # se start hota h jaise koi random color hai uske lie # ka use kaarte hai 
    for (let i = 0; i < 6; i++) { // hex color me koi bhi  6digits value rahengi jaise f1f1f1
        color += hex[Math.floor(Math.random() * 16)]; // random index generate karke hex string se color uthao 
    }
    return color; // final random color return karo
};

let intervalId; // intervalid store karne ke lie variable 
const startChangingColor = function () { // background color change start krne ka function
    if (!intervalId) { // agar interval start nahi h tabhi naya start kro
     intervalId = setInterval(changeBgColor, 1000); // har ek second me background color change hoga 
    }

    function changeBgColor() { // background color change krne wala function
    document.body.style.backgroundColor = randomColor(); // body ka background random color se change kro 
    }
};
const stopChangingColor = function () { // background color change stop krne ka function 
    clearInterval(intervalId); // interval color ko stop kro
    intervalId = null; // interval value ko reset kro 
};

document.querySelector("#start").addEventListener("click", startChangingColor) // queryselector se button select
// event listener se click event
document.querySelector("#stop").addEventListener("click", stopChangingColor) // start change color aur stop change color ko trigger karne ke lie