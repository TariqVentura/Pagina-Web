var btnimg1 = document.getElementById('img1'),
    btnimg2 = document.getElementById('img2'),
    overlay = document.getElementById('overlay'),
    overlay2 = document.getElementById('overlay2'),
    btncerrar = document.getElementById('btn-close'),
    btncerrar2 = document.getElementById('btn-close2'),
    navbar = document.getElementById('Menu'),
    fan_1 = document.getElementById('fan-1'),
    overlay4 = document.getElementById('overlay4'),
    btncerrar4 = document.getElementById('btn-close4'),
    fan_2 = document.getElementById('fan-2'),
    overlay5 = document.getElementById('overlay5'),
    btncerrar5 = document.getElementById('btn-close5'),
    fan_3 = document.getElementById('fan-3'),
    overlay6 = document.getElementById('overlay6'),
    btncerrar6 = document.getElementById('btn-close6')
    fan_4 = document.getElementById('fan-4'),
    overlay7 = document.getElementById('overlay7'),
    btncerrar7 = document.getElementById('btn-close7');

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

fan_1.addEventListener('click', function()
{
    overlay4.classList.add('active')
})
btncerrar4.addEventListener('click', function()
{
    overlay4.classList.remove('active')
})

fan_2.addEventListener('click', function()
{
    overlay5.classList.add('active')
})
btncerrar5.addEventListener('click', function()
{
    overlay5.classList.remove('active')
})

fan_3.addEventListener('click', function()
{
    overlay6.classList.add('active')
})
btncerrar6.addEventListener('click', function()
{
    overlay6.classList.remove('active')
})

fan_4.addEventListener('click', function()
{
    overlay7.classList.add('active')
})
btncerrar7.addEventListener('click', function()
{
    overlay7.classList.remove('active')
})