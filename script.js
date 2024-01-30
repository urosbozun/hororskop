document.addEventListener("DOMContentLoaded", function () {
    // Get all the horoscope sign sections
    const horoscopeSigns = document.querySelectorAll(".horoscope-sign");

    // Attach click event listener to each horoscope sign section
    horoscopeSigns.forEach(sign => {
        const button = sign.querySelector("button");
        const content = sign.querySelector(".content");

        button.addEventListener("click", function () {
            content.classList.toggle("hidden");
        });
    });
});
