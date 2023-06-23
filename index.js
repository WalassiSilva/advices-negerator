const adviceButton = document.querySelector(".button-dice");
const adviceNumber = document.querySelector(".n-advice");
const adviceDescription = document.querySelector(".advice");

async function getAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;
}

adviceButton.addEventListener("click", getAdvice);

getAdvice();