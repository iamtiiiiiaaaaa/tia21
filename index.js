const firstPage = document.getElementById("first-page");
const secondPage = document.getElementById("second-page");
const kadoImg = document.getElementById("kado-img");
const dot0 = document.createElement("div");
const dot1 = document.createElement("div");
const dot2 = document.createElement("div");
const dot3 = document.createElement("div");

kadoImg.addEventListener("click", () => {
    firstPage.classList.add("d-none");
    secondPage.classList.remove("d-none");
    document.body.style.backgroundColor = "#F4C2D7";
});

const btnNext0 = document.getElementById("next-0");
btnNext0.addEventListener("click", () => {
    document.getElementById("statement0").classList.add("d-none");
    document.getElementById("statement1").classList.remove("d-none");
})

const btnNext1 = document.getElementById("next-1");
btnNext1.addEventListener("click", () => {
    document.getElementById("statement1").classList.add("d-none");
    document.getElementById("statement2").classList.remove("d-none");
    dot0.classList.add("dot0");
    dot1.classList.add("dot1");
    dot2.classList.add("dot2");
    dot3.classList.add("dot3");
    secondPage.appendChild(dot0);
    secondPage.appendChild(dot1);
    secondPage.appendChild(dot2);
    secondPage.appendChild(dot3);
})

const btnNext2 = document.getElementById("next-2");
btnNext2.addEventListener("click", () => {
    secondPage.classList.add("d-none");
    document.getElementById("error-pages").classList.remove("d-none");
    setInterval(() => navigator.vibrate(1000), 1000);
})

dot0.addEventListener("click", () => {
    document.getElementById("statement2").classList.add("d-none");
    document.getElementById("statement3").classList.remove("d-none")
    dot0.setAttribute("class", "d-none");
    dot1.setAttribute("class", "d-none");
    dot2.setAttribute("class", "d-none");
    dot3.setAttribute("class", "d-none");

})
dot1.addEventListener("click", () => {
    secondPage.classList.add("d-none");
    document.getElementById("error-pages").classList.remove("d-none");
    setInterval(() => navigator.vibrate(1000), 1000);
})
dot2.addEventListener("click", () => {
    secondPage.classList.add("d-none");
    document.getElementById("error-pages").classList.remove("d-none");
    setInterval(() => navigator.vibrate(1000), 1000);
})
dot3.addEventListener("click", () => {
    secondPage.classList.add("d-none");
    document.getElementById("error-pages").classList.remove("d-none");
    setInterval(() => navigator.vibrate(1000), 1000);
})

const btnNext3 = document.getElementById("next-3");
btnNext3.addEventListener("click", () => {
    document.getElementById("statement3").classList.add("d-none");
    document.getElementById("statement4").classList.remove("d-none");
    document.getElementById("lovePanda").classList.remove("d-none");
    document.getElementById("two-support").classList.remove("d-none");
    document.getElementById("myAudio").play();
})

const btnNext4 = document.getElementById("next-4");
btnNext4.addEventListener("click", () => {
    document.getElementById("statement4").classList.add("d-none");
    document.getElementById("statement5").classList.remove("d-none");
})

document.getElementById("sub-st5").addEventListener("scroll", event => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;

    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
        document.getElementById("btn").classList.remove("d-none")
    }
});

const btnGift = document.getElementById("gift-btn");
btnGift.addEventListener("click", () => {
    document.getElementById("statement5").classList.add("d-none")
    document.getElementById("statement3").classList.remove("d-none")
    document.getElementById("lovePanda").classList.add("d-none");
    document.getElementById("two-support").classList.add("d-none");
})
