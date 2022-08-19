let logoNumber = 0;
const logoArray = ['./public/images/moon_phase_1.png','./public/images/moon_phase_2.png','./public/images/moon_phase_3.png','./public/images/moon_phase_4.png','./public/images/moon_phase_5.png','./public/images/moon_phase_6.png','./public/images/moon_phase_7.png','./public/images/moon_phase_8.png'];
const navLogo = document.getElementById('top-nav-moon');

const firstAnchor = document.getElementById('first-slide-anchor');
const firstLabel = document.getElementById('first-slide-label');
const firstImage = document.getElementById('first-img-back');
const firstDesc = document.getElementById('first-slide-desc');
const firstBackImg = document.getElementById('first-back-img');

const secondAnchor = document.getElementById('second-slide-anchor');
const secondLabel = document.getElementById('second-slide-label');
const secondImage = document.getElementById('second-img-back');
const secondDesc = document.getElementById('second-slide-desc');
const secondBackImg = document.getElementById('second-back-img');

const thirdAnchor = document.getElementById('third-slide-anchor');
const thirdLabel = document.getElementById('third-slide-label');
const thirdImage = document.getElementById('third-img-back');
const thirdDesc = document.getElementById('third-slide-desc');
const thirdBackImg = document.getElementById('third-back-img');

navLogo.addEventListener('mouseover',()=>{
    if(logoNumber<logoArray.length-1){
        logoNumber++;
        navLogo.src = logoArray[logoNumber];
    }else{
        logoNumber = 0;
        navLogo.src = logoArray[logoNumber];
    }
});

fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=100')
    .then(res=>res.json())
    .then((data)=>{
        setCarouselSlides(data);
    });

function setCarouselSlides(spacePosts){
    firstAnchor.href = spacePosts[0]["url"];
    firstLabel.textContent = spacePosts[0]["title"];
    // firstImage.style.backgroundImage = `url(${spacePosts[0]["imageUrl"]})`;
    firstBackImg.src= spacePosts[0]["imageUrl"];
    firstDesc.textContent = spacePosts[0]["summary"];

    secondAnchor.href = spacePosts[1]["url"];
    secondLabel.textContent = spacePosts[1]["title"];
    // secondImage.style.backgroundImage = `url(${spacePosts[1]["imageUrl"]})`;
    secondBackImg.src= spacePosts[1]["imageUrl"];
    secondDesc.textContent = spacePosts[1]["summary"];

    thirdAnchor.href = spacePosts[2]["url"];
    thirdLabel.textContent = spacePosts[2]["title"];
    // thirdImage.style.backgroundImage = `url(${spacePosts[2]["imageUrl"]})`;
    thirdBackImg.src= spacePosts[2]["imageUrl"];
    thirdDesc.textContent = spacePosts[2]["summary"];
}