
let slides = [
    {
        image: "https://images.pexels.com/photos/32923776/pexels-photo-32923776.jpeg",
        title: "Trentino-Alto Adige, Italia",
        description: "Moody landscape of the Dolomites with dramatic clouds in Trentino-Alto Adige, Italy."
    },
    {
        image: "https://images.pexels.com/photos/36882617/pexels-photo-36882617.jpeg",
        title: "Switzerland",
        description: "Stunning snow-covered mountain peaks showcasing winter's raw beauty and rugged terrain."
    },
    {
        image: "https://images.pexels.com/photos/19196724/pexels-photo-19196724.jpeg",
        title: "Hintertux, Tirol, Österreich",
        description: "Peaceful winter scene of snow-covered mountains shrouded in mist in Tirol, Austria."
    },
    {
        image: "https://images.pexels.com/photos/3218443/pexels-photo-3218443.jpeg",
        title: "Tirol, Österreich",
        description: "Breathtaking view of mist-covered mountains in Tirol, Austria, during autumn. "
    },
    {
        image: "https://images.pexels.com/photos/38755500/pexels-photo-38755500.jpeg",
        title: "Garmisch-Partenkirchen, BY, Almanya",
        description: "Snow-capped Bavarian Alps overlooking a lush forest in Garmisch-Partenkirchen."
    }
];

let currentIndex = 0;

const slider = document.getElementById("slider");
const slideElement = document.querySelector(".slide");

const slideImage = document.getElementById("slideImage");
const slideTitle = document.getElementById("slideTitle");
const slideDescription = document.getElementById("slideDescription");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let autoSlideTimer = null;

function showSlide() {

    let slide = slides[currentIndex];

    slideImage.src = slide.image;
    slideTitle.textContent = slide.title;
    slideDescription.textContent = slide.description;

    slideElement.classList.remove("fade-in");

    void slideElement.offsetWidth;

    slideElement.classList.add("fade-in");
}

function nextSlide() {

    if (currentIndex < slides.length - 1) {
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }

    showSlide();
}

function prevSlide() {

    if (currentIndex > 0) {
        currentIndex--;
    }
    else {
        currentIndex = slides.length - 1;
    }

    showSlide();
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function startAutoSlide() {

    if (autoSlideTimer !== null) {
        return;
    }

    autoSlideTimer = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {

    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
}

slider.addEventListener("mouseenter", stopAutoSlide);

slider.addEventListener("mouseleave", startAutoSlide);

showSlide();

startAutoSlide();
