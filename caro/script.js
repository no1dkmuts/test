let size = 3;
var moves = 0;

var data = {};
var a = document.querySelector(".table");
function createTable () {
    var table = `<table>`;
    for (let i = 0; i < size; i++) {
        table += `<tr>`
        for (let j = 0; j < size; j++) {
            table += '<td row="' + i + '" column="' + j + '"></td>';
        }
        table += `</tr>`
    }

    a.innerHTML = table;
}
createTable();
var td = Array.from(document.querySelectorAll("td"));
td.forEach(td => td.addEventListener("click", mark));
function mark(e) {
    if (e.target.innerHTML) return;
    var current_mark = moves % 2 == 0 ? "X" : "O";
    var column = e.target.getAttribute("column");
    var row = e.target.getAttribute("row");
    e.target.innerHTML = current_mark;
    
    data[row + '' + column] = current_mark;
    moves++;
    checkEnd(current_mark);
    console.log(data)
}
function checkEnd(mark) {
    console.log(mark)
    var vertical = 0,
        horizontal = 0;
    diagonal_right = 0,
        diagonal_left = 0;

    for (var i = 0; i < size; i++) {

        vertical = 0;
        horizontal = 0;

        for (var j = 0; j < size; j++) {

            if (data[i + '' + j] == mark) {
                horizontal++;
                console.log("a")
            }

            if (data[j + '' + i] == mark) {
                vertical++;
            }

        }

        if (data[i + '' + i] == mark) {
            diagonal_right++;
        }

        if (data[(size - 1 - i) + '' + i] == mark) {
            diagonal_left++;
        }

        if (horizontal == size || vertical == size) {
            alert(`${mark} win`)
            return true;
        }

    }

    if (diagonal_right == size || diagonal_left == size) {
        alert(`${mark} win`);
        return true;
    }

    return false;
}



var change_size = document.querySelector("button");
var choose_size = document.querySelector(".choose_size");
var win_size = document.querySelector(".win_size")
change_size.addEventListener("click", function () {
    size = choose_size.value;
    a.innerHTML = '';
    createTable();
    var td = Array.from(document.querySelectorAll("td"));
    td.forEach(td => td.addEventListener("click", mark));

})
