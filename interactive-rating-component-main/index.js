const MainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates =document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    MainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    MainContainer.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})