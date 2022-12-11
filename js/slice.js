var allt = document.querySelectorAll(".textcard");
allt.forEach(a =>
{
    a.onmouseover = function(){
        $clamp(a,{
        clamp: 10,
        useNativeClamp: true
    })
    };
    a.onmouseout = function(){
        $clamp(a,{
        clamp: 1,
        useNativeClamp: true
    })};
});
// var elements = document.querySelectorAll(".textcard");
// elements.forEach(e => {
//     let text = e.textContent.length;
//     if (text > 45)
//         e.textContent = e.textContent.slice(0, 42) + '...';
// });