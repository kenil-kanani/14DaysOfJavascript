const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".heading");

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    infoTextEl.innerText = `Searching the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      meaningContainerEl.style.display = "block";
      infoTextEl.style.display = "none";
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";
      audioEl.style.display = "none";
    } else {
      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      audioEl.style.display = "inline-flex";
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `an error happened, try again later`;
  }
}
let a
inputEl.addEventListener("keyup", (e) => {
  a = e.target.value
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
btnEl.addEventListener("click", () => {
  if (a) {
    fetchAPI(a);
  }
});








const careers = ["English Dictionary"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `
    <p>${careers[
            careerIndex
        ].slice(0, characterIndex)}</p>
    `;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
}