"use strict";
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const btnclicked = document.querySelector("#btnClicked");
btnclicked.addEventListener("click", translate);

async function translate() {
  const url = "https://api.funtranslations.com/translate/minion.json?text=";
  const text = input.value;

  if (text === "") {
    alert("Please Enter Something FIrst");
    return;
  }

  try {
    const res = await fetch(`${url}${text}`);
    const data = await res.json();
    if (res.status === 429) {
      alert("Error Occurred While COnverting Text");
    }
    const translatedText = data.contents.translated;
    output.textContent = translatedText;
  } catch (err) {
    alert(err);
  }
}
