/* =========================================
   PAGE NAVIGATION
========================================= */

function goToPage2() {
    window.location.href = "page2.html";
}

function goToPage3() {
    window.location.href = "page3.html";
}


/* =========================================
   YES ANSWER
========================================= */

function answerYes() {

    const phoneNumber = "918870602160";

    const message =
        "Hi Chello ❤️ I accept your apology! 🥺❤️";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}


/* =========================================
   NO ANSWER
========================================= */

function answerNo() {

    const phoneNumber = "918870602160";

    const message =
        "Hi Chello 💔 I haven't accepted your apology yet. 🥺";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}