// Elements

    const resultBtn = document.querySelector("#result-btn")
    const degreeChosen = document.querySelector("#degree-chosen")
    const resultform = document.querySelector("#results")
    const typeSelected = document.querySelector("#type-result")
    const celsius = document.querySelector("#celsius")
    const result = document.querySelector("#result")

// Functions


// Events
   resultBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const value = Number(number.value);

    switch(typeSelected.value) {

        case "celsius":
            result.textContent =
                `Fahrenheit = ${(value * 1.8 + 32).toFixed(2)}
                 | Kelvin = ${(value + 273).toFixed(2)}`;
            break;

        case "fahrenheit":
            result.textContent =
                `Celsius = ${((value - 32) / 1.8).toFixed(2)}
                 | Kelvin = ${((value - 32) / 1.8 + 273).toFixed(2)}`;
            break;

        case "kelvin":
            result.textContent =
                `Celsius = ${(value - 273).toFixed(2)}
                | Fahrenheit = ${((value - 273) * 1.8 + 32).toFixed(2)}`
            break;
    }

    degreeChosen.textContent = typeSelected.value;
    resultform.classList.remove("hide");
});