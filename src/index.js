let logoNumber = 0;
const logoArray = ['./public/images/moon_phase_1.png', './public/images/moon_phase_2.png', './public/images/moon_phase_3.png', './public/images/moon_phase_4.png', './public/images/moon_phase_5.png', './public/images/moon_phase_6.png', './public/images/moon_phase_7.png', './public/images/moon_phase_8.png'];
const navLogo = document.getElementById('top-nav-moon');
const articlesButton = document.getElementById('articles-button');
const reportButton = document.getElementById('reports-button');
const blogButton = document.getElementById('blogs-button');
const launchButton = document.getElementById('launches-button');
const buttonArray = [articlesButton, reportButton, blogButton, launchButton];

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

/* Cards */
const firstCardImage = document.getElementById('first-card-image');
const firstCardTitle = document.getElementById('first-card-title');
const firstCardDesc = document.getElementById('first-card-desc');
const firstCardLink = document.getElementById('first-card-link');

const secondCardImage = document.getElementById('second-card-image');
const secondCardTitle = document.getElementById('second-card-title');
const secondCardDesc = document.getElementById('second-card-desc');
const secondCardLink = document.getElementById('second-card-link');

const thirdCardImage = document.getElementById('third-card-image');
const thirdCardTitle = document.getElementById('third-card-title');
const thirdCardDesc = document.getElementById('third-card-desc');
const thirdCardLink = document.getElementById('third-card-link');

const fourthCardImage = document.getElementById('fourth-card-image');
const fourthCardTitle = document.getElementById('fourth-card-title');
const fourthCardDesc = document.getElementById('fourth-card-desc');
const fourthCardLink = document.getElementById('fourth-card-link');

const fifthCardImage = document.getElementById('fifth-card-image');
const fifthCardTitle = document.getElementById('fifth-card-title');
const fifthCardDesc = document.getElementById('fifth-card-desc');
const fifthCardLink = document.getElementById('fifth-card-link');

const sixthCardImage = document.getElementById('sixth-card-image');
const sixthCardTitle = document.getElementById('sixth-card-title');
const sixthCardDesc = document.getElementById('sixth-card-desc');
const sixthCardLink = document.getElementById('sixth-card-link');

const seventhCardImage = document.getElementById('seventh-card-image');
const seventhCardTitle = document.getElementById('seventh-card-title');
const seventhCardDesc = document.getElementById('seventh-card-desc');
const seventhCardLink = document.getElementById('seventh-card-link');

const eighthCardImage = document.getElementById('eighth-card-image');
const eighthCardTitle = document.getElementById('eighth-card-title');
const eighthCardDesc = document.getElementById('eighth-card-desc');
const eighthCardLink = document.getElementById('eighth-card-link');

const ninthCardImage = document.getElementById('ninth-card-image');
const ninthCardTitle = document.getElementById('ninth-card-title');
const ninthCardDesc = document.getElementById('ninth-card-desc');
const ninthCardLink = document.getElementById('ninth-card-link');

setInterval(()=>{
    let today = new Date();
    let minute = today.getMinutes() > 10 ? today.getMinutes() : `0${today.getMinutes()}`;
    let second = today.getSeconds() > 10 ? today.getSeconds() : `0${today.getSeconds()}`;
    let time = today.getHours() + ":" + minute + ":" + second;
    document.getElementById('time-button').textContent = time;
}, 1000);

document.addEventListener('keydown',function(e) {
    console.log(e);
    if (e.key === "ArrowLeft") {
       // Previous
       document.querySelector(".carousel-control-prev").click();
       return false;
    }
    if (e.key === "ArrowRight") {
       // Next
       document.querySelector(".carousel-control-next").click();
       return false;
    }
});

navLogo.addEventListener('mouseover', () => {
    if (logoNumber < logoArray.length - 1) {
        logoNumber++;
        navLogo.src = logoArray[logoNumber];
    } else {
        logoNumber = 0;
        navLogo.src = logoArray[logoNumber];
    }
});

fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=100')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        setCarouselSlides(data);
        cardArticles(data);
    });

//you must make the callback function on this event listener as an async function, so that you can
//use the await keyword inside since the await keyword can only be used inside async functions
articlesButton.addEventListener('click', async () => {
    buttonArray.forEach((button) => {
        button.classList.remove('active');
    });

    articlesButton.classList.add('active');
    //this fetchReqeust variable is a Promise since fetch() returns a Promise Object
    let fetchRequest = fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=100');

    //if we didn't put await before fetchRequest, which is set equal to a Promise Object, then 
    //we would be setting apiResultJson as a Promise Object.
    //instead, by putting the await keyword, we wait for the Promise to resolve and then set the
    //value of that Promise resolution as apiResultJson
    let apiResultJson = await fetchRequest;

    //since the return of json() (which is asynchronous) is a Promise Object, we want to *wait* for the 
    //resolution of its return which, upon fulfilment, will be a readable, usable array of JavaScript Objects
    //we want to set that array of Objects equal to javaScriptObjectReturn and NOT the Promise Object, which is
    //why we have to use the await keyword
    let javaScriptObjectReturn = await apiResultJson.json();
    setCarouselSlides(javaScriptObjectReturn);
    cardArticles(javaScriptObjectReturn);

    // fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=100')
    // .then(res=>res.json())
    // .then((data)=>{
    //     console.log(data);
    //     setCarouselSlides(data);
    //     cardArticles(data);
    // });
});

reportButton.addEventListener('click', () => {
    buttonArray.forEach((button) => {
        button.classList.remove('active');
    });

    reportButton.classList.add('active');

fetch('https://api.spaceflightnewsapi.net/v3/reports?_limit=100')
    .then(res => res.json())
    .then((data) => {
        setCarouselSlides(data);
        cardArticles(data);
    });
});

launchButton.addEventListener('click', () => {
    buttonArray.forEach((button) => {
        button.classList.remove('active');
    });

    launchButton.classList.add('active');

    fetch('https://ll.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=10&mode=list&ordering=net')
        .then(res => res.json())
        .then((data) => {
            console.log(data['results']);
            setLaunchSlides(data['results']);
            launchArticles(data['results']);
        });
});

blogButton.addEventListener('click', () => {
    buttonArray.forEach((button) => {
        button.classList.remove('active');
    });

    blogButton.classList.add('active');

    fetch('https://api.spaceflightnewsapi.net/v3/blogs?_limit=100')
        .then(res => res.json())
        .then((data) => {
            setCarouselSlides(data);
            cardArticles(data);
        });
});

function setCarouselSlides(spacePosts) {
    firstAnchor.href = spacePosts[0]["url"];
    firstLabel.textContent = spacePosts[0]["title"];
    // firstImage.style.backgroundImage = `url(${spacePosts[0]["imageUrl"]})`;
    firstBackImg.style = "background-image:url(" + spacePosts[0]["imageUrl"] + ");";
    firstDesc.textContent = spacePosts[0]["summary"];

    secondAnchor.href = spacePosts[1]["url"];
    secondLabel.textContent = spacePosts[1]["title"];
    // secondImage.style.backgroundImage = `url(${spacePosts[1]["imageUrl"]})`;
    secondBackImg.style = "background-image:url(" + spacePosts[1]["imageUrl"] + ");";
    secondDesc.textContent = spacePosts[1]["summary"];

    thirdAnchor.href = spacePosts[2]["url"];
    thirdLabel.textContent = spacePosts[2]["title"];
    // thirdImage.style.backgroundImage = `url(${spacePosts[2]["imageUrl"]})`;
    thirdBackImg.style = "background-image:url(" + spacePosts[2]["imageUrl"] + ");";
    thirdDesc.textContent = spacePosts[2]["summary"];
}

function cardArticles(spacePosts) {
    firstCardImage.src = spacePosts[3]["imageUrl"];
    firstCardTitle.textContent = spacePosts[3]["title"];
    firstCardDesc.textContent = spacePosts[3]["summary"];
    firstCardLink.href = spacePosts[3]["url"];

    secondCardImage.src = spacePosts[4]["imageUrl"];
    secondCardTitle.textContent = spacePosts[4]["title"];
    secondCardDesc.textContent = spacePosts[4]["summary"];
    secondCardLink.href = spacePosts[4]["url"];

    thirdCardImage.src = spacePosts[5]["imageUrl"];
    thirdCardTitle.textContent = spacePosts[5]["title"];
    thirdCardDesc.textContent = spacePosts[5]["summary"];
    thirdCardLink.href = spacePosts[5]["url"];

    fourthCardImage.src = spacePosts[6]["imageUrl"];
    fourthCardTitle.textContent = spacePosts[6]["title"];
    fourthCardDesc.textContent = spacePosts[6]["summary"];
    fourthCardLink.href = spacePosts[6]["url"];

    fifthCardImage.src = spacePosts[7]["imageUrl"];
    fifthCardTitle.textContent = spacePosts[7]["title"];
    fifthCardDesc.textContent = spacePosts[7]["summary"];
    fifthCardLink.href = spacePosts[7]["url"];

    sixthCardImage.src = spacePosts[8]["imageUrl"];
    sixthCardTitle.textContent = spacePosts[8]["title"];
    sixthCardDesc.textContent = spacePosts[8]["summary"];
    sixthCardLink.href = spacePosts[8]["url"];

    seventhCardImage.src = spacePosts[9]["imageUrl"];
    seventhCardTitle.textContent = spacePosts[9]["title"];
    seventhCardDesc.textContent = spacePosts[9]["summary"];
    seventhCardLink.href = spacePosts[9]["url"];

    eighthCardImage.src = spacePosts[10]["imageUrl"];
    eighthCardTitle.textContent = spacePosts[10]["title"];
    eighthCardDesc.textContent = spacePosts[10]["summary"];
    eighthCardLink.href = spacePosts[10]["url"];

    ninthCardImage.src = spacePosts[11]["imageUrl"];
    ninthCardTitle.textContent = spacePosts[11]["title"];
    ninthCardDesc.textContent = spacePosts[11]["summary"];
    ninthCardLink.href = spacePosts[11]["url"];
}

function setLaunchSlides(spacePosts) {
    firstAnchor.href = spacePosts[0]["url"];
    firstLabel.textContent = spacePosts[0]["name"];
    // firstImage.style.backgroundImage = `url(${spacePosts[0]["imageUrl"]})`;
    firstBackImg.style = "background-image:url(" + spacePosts[0]["image"] + ");";
    firstDesc.textContent = spacePosts[0]["location"];

    secondAnchor.href = spacePosts[1]["url"];
    secondLabel.textContent = spacePosts[1]["name"];
    // secondImage.style.backgroundImage = `url(${spacePosts[1]["imageUrl"]})`;
    secondBackImg.style = "background-image:url(" + spacePosts[1]["image"] + ");";
    secondDesc.textContent = spacePosts[1]["location"];

    thirdAnchor.href = spacePosts[2]["url"];
    thirdLabel.textContent = spacePosts[2]["name"];
    // thirdImage.style.backgroundImage = `url(${spacePosts[2]["imageUrl"]})`;
    thirdBackImg.style = "background-image:url(" + spacePosts[2]["image"] + ");";
    thirdDesc.textContent = spacePosts[2]["location"];
}

function launchArticles(spacePosts) {
    firstCardImage.src = spacePosts[3]["image"];
    firstCardTitle.textContent = spacePosts[3]["name"];
    firstCardDesc.textContent = spacePosts[3]["location"];
    firstCardLink.href = spacePosts[3]["url"];

    secondCardImage.src = spacePosts[4]["image"];
    secondCardTitle.textContent = spacePosts[4]["name"];
    secondCardDesc.textContent = spacePosts[4]["location"];
    secondCardLink.href = spacePosts[4]["url"];

    thirdCardImage.src = spacePosts[5]["image"];
    thirdCardTitle.textContent = spacePosts[5]["name"];
    thirdCardDesc.textContent = spacePosts[5]["location"];
    thirdCardLink.href = spacePosts[5]["url"];

    fourthCardImage.src = spacePosts[6]["image"];
    fourthCardTitle.textContent = spacePosts[6]["name"];
    fourthCardDesc.textContent = spacePosts[6]["location"];
    fourthCardLink.href = spacePosts[6]["url"];

    fifthCardImage.src = spacePosts[7]["image"];
    fifthCardTitle.textContent = spacePosts[7]["name"];
    fifthCardDesc.textContent = spacePosts[7]["location"];
    fifthCardLink.href = spacePosts[7]["url"];

    sixthCardImage.src = spacePosts[8]["image"];
    sixthCardTitle.textContent = spacePosts[8]["name"];
    sixthCardDesc.textContent = spacePosts[8]["location"];
    sixthCardLink.href = spacePosts[8]["url"];

    seventhCardImage.src = spacePosts[9]["image"];
    seventhCardTitle.textContent = spacePosts[9]["name"];
    seventhCardDesc.textContent = spacePosts[9]["location"];
    seventhCardLink.href = spacePosts[9]["url"];

    eighthCardImage.src = spacePosts[10]["image"];
    eighthCardTitle.textContent = spacePosts[10]["name"];
    eighthCardDesc.textContent = spacePosts[10]["location"];
    eighthCardLink.href = spacePosts[10]["url"];

    ninthCardImage.src = spacePosts[11]["image"];
    ninthCardTitle.textContent = spacePosts[11]["name"];
    ninthCardDesc.textContent = spacePosts[11]["location"];
    ninthCardLink.href = spacePosts[11]["url"];
}
