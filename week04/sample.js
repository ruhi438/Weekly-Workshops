function change_colour(id, color) {
    const first = document.getElementById(id);
    first.style.backgroundColor = color;
}

let button1 = document.getElementById('button1');

button1.onclick = function () {
    change_colour('button2', 'red');
    change_colour('button4', 'red');
}

let button2 = document.getElementById('button2');

button2.onclick = function () {
    change_colour('button1', 'yellow');
    change_colour('button4', 'yellow');
}


let button3 = document.getElementById('button3');

button3.onclick = function () {
    change_colour('button2', 'yellow');
    change_colour('button3', 'yellow');
}

let button4 = document.getElementById('button4');

button4.onclick = function () {
    change_colour('button1', 'red');
    change_colour('button3', 'red');
}
