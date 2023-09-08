const firstPage = document.getElementById("first-page");
const secondPage = document.getElementById("second-page");
const kadoImg = document.getElementById("kado-img");
kadoImg.addEventListener("click", () => {
    firstPage.classList.add("d-none");
    secondPage.classList.remove("d-none");
    document.body.style.backgroundColor = "#F4C2D7";
});