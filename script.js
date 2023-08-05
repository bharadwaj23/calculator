document.addEventListener('contextmenu', event => event.preventDefault());
let boxs = document.getElementsByClassName('box');
let special = document.getElementsByClassName('special');
let bottomSection = document.getElementById('bottomSection');
let topSection = document.getElementById('topSection');

let userInput = document.getElementById('userInput');


function getAnswer(input) {
    if (/(\+\+|--|xx)/.test(input)) {
        return 'Error';
    }
    // Replace 'x' with '*' for multiplication
    input = input.replace(/x/g, '*');

    try {
        // Use eval() to evaluate the expression
        let result = Function('"use strict"; return (' + input + ')')();
        return result;
    } catch (error) {
        return 'Error';
    }
}

let deleteBtn = document.getElementById('delete');
document.addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
        total = null;
        userInput.value = "";
    }
})
deleteBtn.addEventListener('click', () => {
    total = null;
    userInput.value = "";
})


let backspace = document.getElementById('backspace');
document.addEventListener('keydown', (event) => {
    if (event.key === "Backspace") {
        // total = total.slice(0,-1);
        userInput.value = userInput.value.slice(0, -1);
    }
})
backspace.addEventListener('click', () => {
    // total = total.slice(0,-1);
    userInput.value = userInput.value.slice(0, -1);
})

let percentage = document.getElementById('percentage');
percentage.addEventListener('click', () => {
    userInput.value = userInput.value + "%";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "%") {
        userInput.value += '%';
    }
})

let divide = document.getElementById('divide');
divide.addEventListener('click', () => {
    userInput.value = userInput.value + "/";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "/") {
        userInput.value += '/';
    }
})

let seven = document.getElementById('seven');
seven.addEventListener('click', () => {
    userInput.value = userInput.value + "7";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "7") {
        userInput.value += '7';
    }
})

let eight = document.getElementById('eight');
eight.addEventListener('click', () => {
    userInput.value = userInput.value + "8";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "8") {
        userInput.value += '8';
    }
})

let nine = document.getElementById('nine');
nine.addEventListener('click', () => {
    userInput.value = userInput.value + "9";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "9") {
        userInput.value += '9';
    }
})

let multiply = document.getElementById('multiply');
multiply.addEventListener('click', () => {
    userInput.value = userInput.value + "x";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "*") {
        userInput.value += 'x';
    }
})

let four = document.getElementById('four');
four.addEventListener('click', () => {
    userInput.value = userInput.value + "4";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "4") {
        userInput.value += '4';
    }
})

let five = document.getElementById('five');
five.addEventListener('click', () => {
    userInput.value = userInput.value + "5";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "5") {
        userInput.value += '5';
    }
})

let six = document.getElementById('six');
six.addEventListener('click', () => {
    userInput.value = userInput.value + "6";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "6") {
        userInput.value += '6';
    }
})

let minus = document.getElementById('minus');
minus.addEventListener('click', () => {
    userInput.value = userInput.value + "-";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "-") {
        userInput.value += '-';
    }
})

let one = document.getElementById('one');
one.addEventListener('click', () => {
    userInput.value = userInput.value + "1";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "1") {
        userInput.value += '1';
    }
})

let two = document.getElementById('two');
two.addEventListener('click', () => {
    userInput.value = userInput.value + "2";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "2") {
        userInput.value += '2';
    }
})

let three = document.getElementById('three');
three.addEventListener('click', () => {
    userInput.value = userInput.value + "3";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "3") {
        userInput.value += '3';
    }
})

let plus = document.getElementById('plus');
plus.addEventListener('click', () => {
    userInput.value = userInput.value + "+";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "+") {
        userInput.value += '+';
    }
})

let na = document.getElementById('na');
na.addEventListener('click', () => {
    userInput.value = userInput.value + "";
})

let zero = document.getElementById('zero');
zero.addEventListener('click', () => {
    userInput.value = userInput.value + "0";
})
document.addEventListener('keydown', (event) => {
    if (event.key === "0") {
        userInput.value += '0';
    }
})

let dot = document.getElementById('dot');
dot.addEventListener('click', () => {
    userInput.value = userInput.value + ".";
})
document.addEventListener('keydown', (event) => {
    if (event.key === ".") {
        userInput.value += '.';
    }
})

let equals = document.getElementById('equals')
equals.addEventListener('click', () => {
    userInput.value = getAnswer(userInput.value);
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        userInput.value = getAnswer(userInput.value);
    }
})



function theme2() {
    topSection.style.backgroundColor = "#4A55A2";
    bottomSection.style.backgroundColor = "#4A55A2";

    for (let i = 0; i < 20; i++) {
        boxs[i].style.backgroundColor = "#7895CB";
        boxs[i].addEventListener('mouseenter', () => {
            boxs[i].style.backgroundColor = "#A0BFE0";
        });
        boxs[i].addEventListener('mouseleave', () => {
            boxs[i].style.backgroundColor = "#7895CB";
        })
    }
}

function theme1() {
    topSection.style.backgroundColor = "#404258";
    bottomSection.style.backgroundColor = "#404258";

    for (let i = 0; i < 20; i++) {
        boxs[i].style.backgroundColor = "#474E68";
        boxs[i].addEventListener('mouseenter', () => {
            boxs[i].style.backgroundColor = "#6B728E";
        });
        boxs[i].addEventListener('mouseleave', () => {
            boxs[i].style.backgroundColor = "#474E68";
        })
    }

}

function theme3() {
    topSection.style.backgroundColor = "#355764";
    bottomSection.style.backgroundColor = "#355764";

    for (let i = 0; i < 20; i++) {
        boxs[i].style.backgroundColor = "#5A8F7B";
        boxs[i].addEventListener('mouseenter', () => {
            boxs[i].style.backgroundColor = "#85A389";
        });
        boxs[i].addEventListener('mouseleave', () => {
            boxs[i].style.backgroundColor = "#5A8F7B";
        })
    }

}

function theme4() {
    topSection.style.backgroundColor = "#35155D";
    bottomSection.style.backgroundColor = "#35155D";

    for (let i = 0; i < 20; i++) {
        boxs[i].style.backgroundColor = "#512B81";
        boxs[i].addEventListener('mouseenter', () => {
            boxs[i].style.backgroundColor = "#654E92";
        });
        boxs[i].addEventListener('mouseleave', () => {
            boxs[i].style.backgroundColor = "#512B81";
        })
    }

}
