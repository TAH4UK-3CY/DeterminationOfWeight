let inp1 = document.getElementById("input1");
let inp2 = document.getElementById("input2");
let but = document.getElementById("but");
let p = document.getElementById("text");
function calculator() {
    let res = inp1.value / inp2.value;
    let ret;
    if (res < 30) {
        ret = "Все норм";
    } else {
        ret = "Іди в спорт зал";
    }
    p.innerHTML = ret;
}
but.onclick = calculator();
