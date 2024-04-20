let aboutMe = document.querySelector(".aboutMe");
let aboutMeSection = document.querySelector(".aboutMe-section");
let home = document.querySelector(".home");
let mainPage = document.querySelector(".mainPage");
let slider_img = document.querySelector('.slider-img');
let images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
let i=0;

function goAboutMe(){
    mainPage.classList.add("hide");
    aboutMeSection.classList.remove("hide");
    console.log("me");
}

function goMainPage(){
    aboutMeSection.classList.add("hide");
    mainPage.classList.remove("hide");
    console.log("home");
}

aboutMe.addEventListener("click", goAboutMe);
home.addEventListener("click", goMainPage);

function prev(){
    if(i!== undefined && i<=0) i=images.length;
    i--;
    return setImg();
}

function next(){
    if(i!== undefined && i>=images.length-1) i=-1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'images/'+images[i]);
}