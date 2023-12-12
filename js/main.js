<<<<<<< HEAD
//Карусель
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 30,
    nav: true,
    dots: false,
    responsive:{ //Адаптация в зависимости от разрешения экрана
        0:{
            items:1
        },
        725:{
            items:2
        },
        1110:{
            items:3
        }
    },

    navText: [
      '<img src="./img/Arrow-prev.svg" alt="Prev">',
      '<img src="./img/Arrow-next.svg" alt="Next">',
    ],
  });
});

//Навигация
const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const navList = document.querySelector(".header__top-row");
const navItems = document.querySelectorAll(".header__nav-item>a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navIcon.classList.remove("nav-icon--active");
    navList.classList.remove("header__top-row_mobile");
  });
});

navBtn.addEventListener("click", () => {
  navIcon.classList.toggle("nav-icon--active");
  navList.classList.toggle("header__top-row_mobile");
});

// //Элементы управления аудио
// const audio = document.getElementById("myAudio");
// const playPauseButton = document.getElementById("playPauseButton");
// const stopButton = document.getElementById("stopButton");
// const volumeControl = document.getElementById("volumeControl");

// playPauseButton.addEventListener("click", () => {
//   if (audio.paused) {
//     audio.play();
//     playPauseButton.textContent = "Pause";
//   } else {
//     audio.pause();
//     playPauseButton.textContent = "Play";
//   }
// });

// stopButton.addEventListener("click", () => {
//   audio.pause();
//   audio.currentTime = 0;
//   playPauseButton.textContent = "Play";
// });

// volumeControl.addEventListener("input", () => {
//   audio.volume = volumeControl.value;
// });
=======
//Карусель
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 30,
    nav: true,
    dots: false,
    responsive:{ //Адаптация в зависимости от разрешения экрана
        0:{
            items:1
        },
        725:{
            items:2
        },
        1110:{
            items:3
        }
    },

    navText: [
      '<img src="./img/Arrow-prev.svg" alt="Prev">',
      '<img src="./img/Arrow-next.svg" alt="Next">',
    ],
  });
});

//Навигация
const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const navList = document.querySelector(".header__top-row");
const navItems = document.querySelectorAll(".header__nav-item>a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navIcon.classList.remove("nav-icon--active");
    navList.classList.remove("header__top-row_mobile");
  });
});

navBtn.addEventListener("click", () => {
  navIcon.classList.toggle("nav-icon--active");
  navList.classList.toggle("header__top-row_mobile");
});

// //Элементы управления аудио
// const audio = document.getElementById("myAudio");
// const playPauseButton = document.getElementById("playPauseButton");
// const stopButton = document.getElementById("stopButton");
// const volumeControl = document.getElementById("volumeControl");

// playPauseButton.addEventListener("click", () => {
//   if (audio.paused) {
//     audio.play();
//     playPauseButton.textContent = "Pause";
//   } else {
//     audio.pause();
//     playPauseButton.textContent = "Play";
//   }
// });

// stopButton.addEventListener("click", () => {
//   audio.pause();
//   audio.currentTime = 0;
//   playPauseButton.textContent = "Play";
// });

// volumeControl.addEventListener("input", () => {
//   audio.volume = volumeControl.value;
// });
>>>>>>> 62ba4572a024b3e26dde46385c9bf623eaef7760
