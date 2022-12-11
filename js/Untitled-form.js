let wantLog = confirm("Желаете зарегистрироваться на сайте?");
if(wantLog)
{
    alert("Круто!");
}
else
{
    let text = prompt("Вы зарегистрированы?");
    if(text == "Да" || text == "да")
    {
        let log = prompt("Введите логин");
        if(log == "admin")
        {
            let pass = prompt("Введите пароль");
            if(pass == 123)
            {
                alert("Добро пожаловать!");
            }
            else if (pass == null)
                alert("Отменено")
            else
                alert("Неверный пароль");
        }
        else if (log == null)
            alert("Отменено");
        else
        alert("Такого пользователя нет");
    }
    else if(text == null)
     alert("Отменено");
    else
    alert("Ошибка")
}
