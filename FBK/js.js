var btnimg1 = document.getElementById('img1'),
    btnimg2 = document.getElementById('img2'),
    overlay = document.getElementById('overlay'),
    overlay2 = document.getElementById('overlay2'),
    overlay3 = document.getElementById('overlay3'),
    btncerrar = document.getElementById('btn-close'),
    btncerrar2 = document.getElementById('btn-close2'),
    btncerrar3 = document.getElementById('btn-close3'),
    navbar = document.getElementById('Menu'),
    Banner = document.getElementById('banner');

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

Banner.addEventListener('click', function()
{
    overlay3.classList.add('active')
})
btncerrar3.addEventListener('click', function()
{
    overlay3.classList.remove('active')
})

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