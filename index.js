// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

let conversionObject = [
    {
        measure:"length",
        firstUnit:"meter",
        secondUnit:"feet",
        factor:3.281
    },
    {
        measure:"volume",
        firstUnit:"liter",
        secondUnit:"gallon",
        factor:0.264
    },
    {
        measure:"mass",
        firstUnit:"kilogram",
        secondUnit:"pound",
        factor:2.204
    },
]

function unitConversion(inputValue, firstUnit, secondUnit, times2ndUnit) {
  return `${inputValue} ${firstUnit} = ${(inputValue * times2ndUnit).toFixed(
    3
  )} ${secondUnit} | ${inputValue} ${secondUnit} = ${(
    inputValue / times2ndUnit
  ).toFixed(3)} ${firstUnit}`;
}

document
  .querySelector("[data-js=convert]")
  .addEventListener("click", function () {
    let renderResult = "";
    const inputVal = Number(document.querySelector("[data-js=input]").value);

for(let i=0;i<conversionObject.length;i++){
     renderResult += `<div class="result" data-js="results">
                <h2 class="result-description">${conversionObject[i].measure} (${conversionObject[i].firstUnit}/${conversionObject[i].secondUnit})</h2>
                <p class="result-text" data-js="length">${unitConversion(
                  inputVal,
                  conversionObject[i].firstUnit,
                  conversionObject[i].secondUnit,
                  conversionObject[i].factor
                )}</p>
            </div>`
}
    document.querySelector("[data-js=results-container]").innerHTML =
      renderResult;
  });
