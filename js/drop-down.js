var i = 4;
let time = setInterval(function () {
    let linew = document.createElement('li');
    linew.id = "linew";
    linew.innerHTML = "Уведомление" + i;
    nm.textContent = i;
    i++;
    linew.onclick = function () {
        drop.firstChild.remove();
        i--;
    }
    drop.prepend(linew);
}, 3000);
yvedb.onclick = function () {
    clearInterval(time);
    time = setTimeout(function run() {
        let linew = document.createElement('li');
        linew.innerHTML = "Уведомление" + i;
        nm.textContent = i;
        i++;
        linew.onclick = function () {
            this.remove();
            i--;
        }
        drop.prepend(linew);
        setTimeout(run, 3000);
    }, 10000)
}