let container = document.querySelector(".container");
let numbers_row = document.getElementById("numbers_row");
let numbers_column = document.getElementById("numbers_column");
let button = document.querySelector("button");
let rows = 20;
let cols = 20;

function a() {
    button.addEventListener("click", function () {
        rows = numbers_row.value;
        cols = numbers_column.value;
        create();
        th = Array.from(document.querySelectorAll("th"));
        sort();

    })
}

a();
function create() {
    var table = `<table class="scrollTable" style="width: 100%"><thead class="fixedHeader"><tr>`;
    for (let i = 0; i < cols; i++) {
        table += `<th>${i + 1}</th>`
    }
    // container.innerHTML=table;
    table += `<tbody class="scrollContent">`;
    for (let i = 1; i < rows; i++) {
        table += `<tr>`
        for (let j = 0; j < cols; j++) {
            table += `<td column="${j + 1}">${Math.floor(Math.random() * 1000 - 1) + 1}</td>`;
        }
        table += `</tr>`
    }
    table += `</tbody>`
    container.innerHTML = table;
}
create();
var th = Array.from(document.querySelectorAll("th"));
sort();




let scrollContent = document.querySelector(".scrollContent");
let trContent = Array.from(document.querySelectorAll(".scrollContent tr"));


function sort() {
    th.forEach(x => x.addEventListener("click", function (e) {
        let index = e.target.innerHTML;
        let td = document.querySelectorAll(`td[column='${index}']`);
        for (let i = 0; i < td.length; i++) {
            for (let j = i + 1; j < td.length; j++) {

                if (Number(td[i].innerHTML) > Number(td[j].innerHTML)) {
                    trContent[i].parentNode.insertBefore(trContent[j], trContent[i]);
                    td = document.querySelectorAll(`td[column='${index}']`);
                    trContent = Array.from(document.querySelectorAll(".scrollContent tr"));
                }
            }

        }
        th = Array.from(document.querySelectorAll("th"));
    }))
}











