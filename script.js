/* =====================================================
   SCREENS
===================================================== */

const screenOne =
    document.getElementById("screenOne");

const screenTwo =
    document.getElementById("screenTwo");

const screenThree =
    document.getElementById("screenThree");

const screenFour =
    document.getElementById("screenFour");

const screenFive =
    document.getElementById("screenFive");

const screenSix =
    document.getElementById("screenSix");

const screenSeven =
    document.getElementById("screenSeven");

const finalScreen =
    document.getElementById("finalScreen");


/* =====================================================
   MUSIC
===================================================== */

const birthdayMusic =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");

let musicPlaying = false;


/* START MUSIC AFTER FIRST USER TAP */

function startMusic() {

    birthdayMusic.volume = 0.55;

    birthdayMusic.play()
        .then(function () {

            musicPlaying = true;

            musicButton.textContent = "🎵";

            musicButton.classList.add("playing");

        })
        .catch(function () {

            musicPlaying = false;

        });

}


/* MUSIC BUTTON */

musicButton.addEventListener("click", function () {

    if (musicPlaying) {

        birthdayMusic.pause();

        musicPlaying = false;

        musicButton.textContent = "🔇";

        musicButton.classList.remove("playing");

    } else {

        birthdayMusic.play()
            .then(function () {

                musicPlaying = true;

                musicButton.textContent = "🎵";

                musicButton.classList.add("playing");

            });

    }

});


/* =====================================================
   SCREEN SWITCH
===================================================== */

function showScreen(currentScreen, nextScreen) {

    currentScreen.classList.remove("active");

    setTimeout(function () {

        nextScreen.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 400);

}


/* =====================================================
   SCREEN 1
===================================================== */

const giftBox =
    document.getElementById("giftBox");

const giftLid =
    document.getElementById("giftLid");

const tapButton =
    document.getElementById("tapButton");


tapButton.addEventListener("click", function () {

    startMusic();

    giftBox.classList.add("shake");

    setTimeout(function () {

        giftLid.classList.add("open");

        createCelebration();

    }, 500);

    setTimeout(function () {

        showScreen(
            screenOne,
            screenTwo
        );

    }, 1300);

});


/* =====================================================
   SCREEN 2
===================================================== */

const continueButton =
    document.getElementById("continueButton");

const celebration =
    document.getElementById("celebration");


function createCelebration() {

    const symbols = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💝",
        "✨",
        "🌸"
    ];

    for (let i = 0; i < 35; i++) {

        const item =
            document.createElement("span");

        item.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        item.classList.add(
            "celebration-item"
        );

        item.style.left =
            Math.random() * 100 + "%";

        item.style.animationDelay =
            Math.random() * 2 + "s";

        item.style.fontSize =
            (14 + Math.random() * 20) + "px";

        celebration.appendChild(item);

        setTimeout(function () {

            item.remove();

        }, 4000);

    }

}


continueButton.addEventListener(
    "click",
    function () {

        showScreen(
            screenTwo,
            screenThree
        );

    }
);


/* =====================================================
   SCREEN 3
===================================================== */

const wishButton =
    document.getElementById("wishButton");

const wishResult =
    document.getElementById("wishResult");

const letterButton =
    document.getElementById("letterButton");


wishButton.addEventListener(
    "click",
    function () {

        const flames =
            document.querySelectorAll(
                ".flame"
            );

        flames.forEach(function (flame) {

            flame.style.opacity = "0";

            flame.style.transform =
                "scale(0)";

        });

        wishButton.style.display =
            "none";

        wishResult.classList.add(
            "show"
        );

        createWishCelebration();

    }
);


function createWishCelebration() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.classList.add(
            "wish-heart"
        );

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDelay =
            Math.random() * 1.5 + "s";

        screenThree.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 3500);

    }

}


letterButton.addEventListener(
    "click",
    function () {

        showScreen(
            screenThree,
            screenFour
        );

    }
);


/* =====================================================
   SCREEN 4 → SCREEN 5
===================================================== */

const memoriesButton =
    document.getElementById(
        "memoriesButton"
    );

memoriesButton.addEventListener(
    "click",
    function () {

        showScreen(
            screenFour,
            screenFive
        );

    }
);


/* =====================================================
   SCREEN 5 → SCREEN 6
===================================================== */

const nextButton =
    document.getElementById(
        "nextButton"
    );

nextButton.addEventListener(
    "click",
    function () {

        showScreen(
            screenFive,
            screenSix
        );

    }
);


/* =====================================================
   SCREEN 6
===================================================== */

const reasonButton =
    document.getElementById(
        "reasonButton"
    );

const reasonNumber =
    document.getElementById(
        "reasonNumber"
    );

const reasonIcon =
    document.getElementById(
        "reasonIcon"
    );

const reasonTitle =
    document.getElementById(
        "reasonTitle"
    );

const reasonText =
    document.getElementById(
        "reasonText"
    );

const loveCard =
    document.querySelector(
        ".love-card"
    );

const loveFinal =
    document.getElementById(
        "loveFinal"
    );

const futureButton =
    document.getElementById(
        "futureButton"
    );


const loveReasons = [

    {
        icon: "❤️",

        title: "Your Beautiful Heart",

        text:
            "I love the beautiful person you are inside. Your heart, your kindness, and the way you care make you incredibly special to me."
    },

    {
        icon: "🥰",

        title: "Your Smile",

        text:
            "Your smile has a special place in my heart. Whenever I see you smile, somehow my whole world feels a little brighter."
    },

    {
        icon: "💗",

        title: "The Way You Care",

        text:
            "I love the way you care about the people you love. You have a beautiful way of making someone feel important and appreciated."
    },

    {
        icon: "😂",

        title: "Your Silly Side",

        text:
            "I love your funny and silly side. Even your little stubborn moments somehow make you more adorable to me."
    },

    {
        icon: "🌟",

        title: "You Inspire Me",

        text:
            "You make me want to become better, dream bigger, and keep moving forward. Having you in my life gives me another reason to smile."
    },

    {
        icon: "💎",

        title: "You Are One Of A Kind",

        text:
            "There is nobody else like you. You are rare, precious, beautiful, and completely irreplaceable in my heart."
    },

    {
        icon: "👑",

        title: "You Are My Girl",

        text:
            "I love being able to call you mine. You are my beautiful girl, my sugar, my bright star, and my partner in crime."
    },

    {
        icon: "🏡",

        title: "You Feel Like Home",

        text:
            "There is something about you that makes my heart feel safe and happy. Being with you feels like being exactly where I am meant to be."
    },

    {
        icon: "💕",

        title: "Because You Are You",

        text:
            "Most importantly, I don't love you because you are perfect. I love you because you are YOU — and that's more than enough for my heart."
    }

];


let currentReason = 0;


reasonButton.addEventListener(
    "click",
    function () {

        currentReason++;

        if (
            currentReason >=
            loveReasons.length
        ) {

            loveFinal.classList.add(
                "show"
            );

            reasonButton.style.display =
                "none";

            futureButton.classList.add(
                "show"
            );

            return;
        }

        const reason =
            loveReasons[currentReason];

        loveCard.classList.remove(
            "change"
        );

        void loveCard.offsetWidth;

        loveCard.classList.add(
            "change"
        );

        reasonNumber.textContent =
            currentReason + 1;

        reasonIcon.textContent =
            reason.icon;

        reasonTitle.textContent =
            reason.title;

        reasonText.textContent =
            reason.text;

    }
);


/* =====================================================
   SCREEN 6 → SCREEN 7
===================================================== */

futureButton.addEventListener(
    "click",
    function () {

        showScreen(
            screenSix,
            screenSeven
        );

    }
);


/* =====================================================
   SCREEN 7 → FINAL SCREEN
===================================================== */

const finalButton =
    document.getElementById(
        "finalButton"
    );


finalButton.addEventListener(
    "click",
    function () {

        showScreen(
            screenSeven,
            finalScreen
        );

        setTimeout(
            function () {

                startFinalCelebration();

            },
            700
        );

    }
);


/* =====================================================
   FINAL CELEBRATION
===================================================== */

function startFinalCelebration() {

    const heartSymbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💝",
        "✨"
    ];


    /* FLOATING HEARTS */

    for (let i = 0; i < 35; i++) {

        setTimeout(
            function () {

                const heart =
                    document.createElement(
                        "div"
                    );

                heart.className =
                    "final-floating-heart";

                heart.textContent =
                    heartSymbols[
                        Math.floor(
                            Math.random() *
                            heartSymbols.length
                        )
                    ];

                heart.style.left =
                    Math.random() * 100 +
                    "%";

                heart.style.fontSize =
                    (
                        15 +
                        Math.random() * 20
                    ) + "px";

                heart.style.animationDuration =
                    (
                        3 +
                        Math.random() * 3
                    ) + "s";

                finalScreen.appendChild(
                    heart
                );

                setTimeout(
                    function () {

                        heart.remove();

                    },
                    6500
                );

            },
            i * 120
        );

    }


    /* FIREWORKS */

    for (let i = 0; i < 12; i++) {

        setTimeout(
            function () {

                const firework =
                    document.createElement(
                        "div"
                    );

                firework.className =
                    "final-firework";

                firework.textContent =
                    [
                        "✨",
                        "💖",
                        "💕",
                        "🌟"
                    ][
                        Math.floor(
                            Math.random() * 4
                        )
                    ];

                firework.style.left =
                    (
                        15 +
                        Math.random() * 70
                    ) + "%";

                firework.style.top =
                    (
                        10 +
                        Math.random() * 55
                    ) + "%";

                finalScreen.appendChild(
                    firework
                );

                setTimeout(
                    function () {

                        firework.remove();

                    },
                    2000
                );

            },
            i * 350
        );

    }

}


/* =====================================================
   PLAY AGAIN
===================================================== */

const playAgainButton =
    document.getElementById(
        "playAgainButton"
    );


playAgainButton.addEventListener(
    "click",
    function () {

        location.reload();

    }
);