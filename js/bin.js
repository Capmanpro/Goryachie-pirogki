var binob = new Object();
binob = {
    sum: 0
};
bin.onclick = function () {
    x = prompt("Введите число");
    alert("Введено: " + x);
    alert("Было: " + binob.sum);
    binob.sum = binob.sum + Number(x);
    alert("Стало: " + binob.sum);
}