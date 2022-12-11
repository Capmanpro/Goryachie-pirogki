function str_rand() {
    var result = '';
    var words = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var max_position = words.length - 1;
    for (i = 0; i < 5; i++) {
        position = Math.floor(Math.random() * max_position);
        result = result + words.substring(position, position + 1);
    }
    return result;
}
function str_rand2() {
    var words2 = '0123456789';
    var max_position2 = words2.length - 1;
    var result2 = Math.floor(Math.random() * max_position2);
    return result2;
}
let cap = str_rand();
let position1 = str_rand2();
let position2 = str_rand2();
let cho = prompt(cap);
if (cho === cap) {
    alert("Верно!");
}
else {
    cho2 = prompt(position1 + " + " + position2);
    result = position1 + position2;
    if (cho2 == result) {
        alert("Верно!");
    }
    else {
        alert("Ошибка! Попробуйте еще раз...");
        location.reload();
    }
}