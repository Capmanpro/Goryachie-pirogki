var arr = [];
ad.onclick = function () {
    let x = prompt("Введите значени: ");
    arr.push(Number(x));
    alert("Полученный массив: " + arr);
}
del.onclick = function () {
    frst = arr[0];
    arr.shift();
    alert("Удален первый элемент, получен массив: " + arr);
}
chang.onclick = function () {
    x = prompt("Какой элемент изменить: ");
    y = prompt("Новое значение элемента: ");
    arr.splice(x - 1, 1, y);
    alert("Полученный массив: " + arr);
}
fil.onclick = function () {
    a = prompt("Введите значение a: ");
    b = prompt("Введите значение b: ");
    let newarr = arr.filter(function (number) {
        return (number >= a) && (number <= b)
    })
    alert("Отфильтрованный массив: " + newarr);
}
function srt1(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
function srt2(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}
sor.onclick = function () {
    arr.sort(srt1);
    alert("Массив отсортирован по возрастанию: " + arr);
}
sor.oncontextmenu = function () {
    arr.sort(srt2);
    alert("Массив отсортирован по убыванию: " + arr);
}
out.onclick = function () {
    alert("Текущий массив: " + arr);
}