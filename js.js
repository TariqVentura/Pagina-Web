var btnimg1 = document.getElementById('img1'),
    btnimg2 = document.getElementById('img2'),
    overlay = document.getElementById('overlay'),
    overlay2 = document.getElementById('overlay2'),
    btncerrar = document.getElementById('btn-close'),
    btncerrar2 = document.getElementById('btn-close2'),
    navbar = document.getElementById('Menu');

window.onscroll = function() 
{
    var y = window.scrollY
    if(y != 0)
    {
        navbar.classList.add('active')
    }
    else
    {
        navbar.classList.remove('active')
    }
};


btnimg1.addEventListener('click', function()
{
    overlay.classList.add('active')
}
)
btncerrar.addEventListener('click', function()
{
    overlay.classList.remove('active')
})

btnimg2.addEventListener('click', function()
{
    overlay2.classList.add('active')
})
btncerrar2.addEventListener('click', function()
{
    overlay2.classList.remove('active')
})