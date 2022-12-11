var notif = document.createElement('div');
                notif.id = "notif";
                notif.className = "notification";
                notif.style.position = "fixed";
                notif.style.left = "2%";
                notif.style.top = "50%";
                notif.style.zIndex = "999999";
                notif.style.backgroundColor = "pink";
                notif.innerHTML = "Обязательно зарегистрируйся на сайте!";
                notif.onclick = function () {
                    notif.remove();
                    clearInterval(inid);
                }
                function showNotification() {
                    document.body.prepend(notif);
                    setTimeout(delNotification, 1500);
                }
                function delNotification() {
                    notif.remove();
                }
                inid = setInterval(showNotification, 3000);