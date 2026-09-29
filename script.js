/* =========================================
   🎵 BACKGROUND MUSIC
========================================= */

const birthdayMusic = new Audio("perfect.mp3");

birthdayMusic.loop = true;
birthdayMusic.volume = 0.35;


/* =========================================
   🎵 START MUSIC
========================================= */

function startBirthdayMusic() {

    birthdayMusic.play().catch(() => {

        console.log(
            "Music could not start automatically."
        );

    });

}


/* =========================================
   📖 PAGE NAVIGATION
========================================= */

function showSection(sectionId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const nextPage = document.getElementById(sectionId);

    if (nextPage) {

        startBirthdayMusic();

        nextPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createSparkles();
    }

}


/* =========================================
   🎥 SPECIAL VIDEO SURPRISE
========================================= */

function playSpecialVideo() {

    const videoBox =
        document.getElementById("specialVideoBox");

    const video =
        document.getElementById("specialVideo");

    const playButton =
        document.querySelector(".special-play-btn");

    const lastThing =
        document.getElementById("oneLastThing");


    /* Show the video */

    videoBox.style.display = "block";


    /* Hide the play button */

    if (playButton) {
        playButton.style.display = "none";
    }


    /* Scroll gently toward the video */

    setTimeout(() => {

        videoBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 150);


    /* Play the video */

    video.play().catch(() => {

        console.log(
            "Video could not autoplay."
        );

    });


    /* When the video finishes */

    video.onended = function() {

        lastThing.style.display = "block";


        /* Little magical sparkles */

        createSparkles();


        /* Bring the message into view */

        setTimeout(() => {

            lastThing.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    };

}


/* =========================================
   💌 POPUP NOTES
========================================= */

function openNote(message) {

    const popup =
        document.getElementById("notePopup");

    const noteText =
        document.getElementById("noteText");

    noteText.innerHTML = `
        <p style="
            font-family: 'Parisienne', cursive;
            font-size: 30px;
            color: #a83f69;
            line-height: 1.5;
        ">
            ${message}
        </p>
    `;

    popup.style.display = "flex";

}


function closeNote() {

    const popup =
        document.getElementById("notePopup");

    popup.style.display = "none";

}


/* Close popup when clicking outside */

document.addEventListener(
    "click",
    function(event) {

        const popup =
            document.getElementById("notePopup");

        if (event.target === popup) {

            closeNote();

        }

    }
);


/* =========================================
   ✨ WISH
========================================= */

function makeWish() {

    const message =
        document.getElementById("wishMessage");

    message.innerHTML =
        "May every little wish in your heart find its way to you. ✨🤍";

    createWishParticles();

}


/* =========================================
   ✦ SPARKLES
========================================= */

function createSparkles() {

    for (let i = 0; i < 8; i++) {

        const sparkle =
            document.createElement("span");

        sparkle.className = "sparkle";

        sparkle.innerHTML = "✦";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 100 + "vh";

        sparkle.style.fontSize =
            (10 + Math.random() * 14) + "px";

        sparkle.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 5000);

    }

}


/* =========================================
   ✨ WISH PARTICLES
========================================= */

function createWishParticles() {

    for (let i = 0; i < 25; i++) {

        const particle =
            document.createElement("span");

        particle.innerHTML =
            Math.random() > 0.5
                ? "♡"
                : "✦";

        particle.style.position = "fixed";
        particle.style.left = "50%";
        particle.style.top = "50%";
        particle.style.zIndex = "2000";
        particle.style.pointerEvents = "none";

        particle.style.color = "#d96f99";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            80 + Math.random() * 180;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        particle.style.setProperty(
            "--x",
            x + "px"
        );

        particle.style.setProperty(
            "--y",
            y + "px"
        );

        particle.style.animation =
            "wishExplosion 1.5s ease-out forwards";

        document.body.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 1600);

    }

}


/* =========================================
   ✨ WISH ANIMATION
========================================= */

const wishStyle =
    document.createElement("style");

wishStyle.innerHTML = `

@keyframes wishExplosion {

    0% {
        opacity: 1;

        transform:
            translate(-50%, -50%)
            scale(.5);
    }

    100% {
        opacity: 0;

        transform:
            translate(
                calc(-50% + var(--x)),
                calc(-50% + var(--y))
            )
            scale(1.4);
    }

}

`;

document.head.appendChild(wishStyle);


/* =========================================
   💗 FLOATING HEARTS
========================================= */

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML =
        Math.random() > 0.5
            ? "♡"
            : "✦";

    heart.style.position = "fixed";
    heart.style.bottom = "-20px";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.color = "#e9a0ba";

    heart.style.fontSize =
        (12 + Math.random() * 14) + "px";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "5";

    heart.style.animation =
        "floatUp 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}


/* =========================================
   💗 FLOATING HEART ANIMATION
========================================= */

const heartStyle =
    document.createElement("style");

heartStyle.innerHTML = `

@keyframes floatUp {

    0% {
        opacity: 0;

        transform:
            translateY(0)
            rotate(0deg);
    }

    15% {
        opacity: 1;
    }

    100% {
        opacity: 0;

        transform:
            translateY(-100vh)
            rotate(180deg);
    }

}

`;

document.head.appendChild(heartStyle);


/* =========================================
   🎀 START LITTLE MAGIC
========================================= */

setInterval(() => {

    createFloatingHeart();

}, 1800);


/* =========================================
   💻 CONSOLE MESSAGE
========================================= */

console.log(
    "🎀 Bauni's birthday website is ready! ♡"
);