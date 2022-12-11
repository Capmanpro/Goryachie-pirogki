button.onclick = function ()
{
    if (button.style.background == "white")
    {
        button.style.background = "red";
        button.style.color = "white";
    }
    else if (button.style.background == "red")
    {
        button.style.background = "white";
        button.style.color = "black";
    }

};
document.addEventListener("click", function(e)
{
  if_id = e.target.id;
  the_class = e.target.className;
  if(the_class == "click_me")
  {
    if_id = document.getElementById(if_id);
    if(if_id.style.background == "red")
    {
        if_id.style.color = "black";
      if_id.style.background = "white";
    }
    else
    {
      var links = document.querySelectorAll(".click_me");
      links.forEach(link => {link.setAttribute("style", "background:white");})
      if_id.style.background = "red";
      if_id.style.color = "white";
    }
  }
});