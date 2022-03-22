
window.onscroll = function (){
    scrollFunction()
}

var navbar = document.getElementById('navbar')
var sticky = navbar.offsetTop

function scrollFunction(){
    if (window.pageYOffset > sticky){
        console.log(2);
        navbar.classList.add("sticky")
    }else{
        console.log(1);
        navbar.classList.remove("sticky")
    }
}

var nav = document.getElementsByClassName('navbar_threedots')
var navigation_bar = document.getElementById('mobile_nav')
var div = document.getElementsByClassName('animation_x')

window.addEventListener('resize' , function (e){
    if (window.innerWidth > 768){
        console.log(1);
        if (navigation_bar.classList.value.includes('active')){
            navigation_bar.style.display = 'none'
        }
    }else{
        if (!navigation_bar.classList.value.includes('active')){
            console.log(navigation_bar.classList);
        }else{
            console.log(2);
            navigation_bar.style.display = 'block'
        }
    }
})

function changeCondition(data){
    navigation_bar.style.display = ''
    navigation_bar.classList.toggle('active');
    if (data.checked){
        // navigation_bar.style.display = 'block'
        div[0].style.transform = 'rotateZ(45deg) translateY(3px) translateX(4px)'
        div[1].style.display = 'none'
        div[2].style.transform = 'rotateZ(-45deg) translateY(-3px) translateX(4px)'
    }else {
        // navigation_bar.style.display = 'none'
        div[0].style.transform = 'none'
        div[1].style.display = 'block'
        div[2].style.transform = 'none'
    }
}

var slides = document.getElementsByClassName('text_inside')
var slidIndex = 1
slide(slidIndex)

setInterval(function (){
    slidIndex++

    if (slidIndex > slides.length){
        slidIndex = 1
    }

    slide(slidIndex)
} , 2000)

function slide(n){
    var i;

    if (n > slides.length){
        slideIndex = 1
    }if (n < 1){
        slidIndex = slides.length
    }

    for (i = 0 ; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    slides[slidIndex - 1].style.display = 'block'
}

var images_slide = document.getElementsByClassName('image_hero')
var dot = document.getElementsByClassName('dot')
var imgIndex = 1

function indexChange(value){
    slide_images(imgIndex += value)
}

function nowIndex(value){
    slide_images(imgIndex = value)
}

slide_images(imgIndex)

setInterval(function (){
    imgIndex++

    if (imgIndex > 3){
        imgIndex = 1
    }
    slide_images(imgIndex)
} , 2000)

function slide_images(n){
    var count ;

    if(n > images_slide.length){
        imgIndex = 1
    }if (n < 1) {
        imgIndex = images_slide.length
    }

    for (count = 0 ; count < images_slide.length ; count++){
        images_slide[count].style.display = 'none'
    }
    for (count = 0 ; count < dot.length ; count++){
        dot[count].className = dot[count].className.replace(' active_dot' , ' ')
    }

    images_slide[imgIndex - 1].style.display = 'block'
    dot[imgIndex-1].className += ' active_dot'
}

function searchFilter(){
    let input = document.getElementById("search")
    const cards = document.querySelectorAll(".card")
    cards.forEach(item => {
        let search = item.querySelector("h4")
        if (search.innerText.toLowerCase().indexOf(input.value.toLowerCase()) > -1) {
            item.style.display = ""
        }else{
            item.style.display = "none"

        }
    });
}