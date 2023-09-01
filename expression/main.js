(async () => {
    const resultDisplay = document.querySelector("body div.result > p");
    const container = document.querySelector("body div.container");
    const synth = window.speechSynthesis;
    const selectedPath = [];

    function generateChoiceButton(choice) {
        const button = document.createElement("button");
        const icon = document.createElement("span");
        button.classList.add("choice");
        icon.classList.add("icon", "fa-solid");

        if (choice.icon) icon.classList.add(...choice.icon.split(" "));
        if (choice.color) icon.style.color = choice.color;
        button.appendChild(icon);
        button.innerHTML += choice.name.replace(
            /(\(.+\))/gi,
            '<span class="details">$1</span>'
        );
        return button;
    }

    function updateSelectedPath() {
        resultDisplay.innerHTML = selectedPath
            .filter((choice) => !!choice.textDisplay)
            .map((choice) => choice.textDisplay)
            .join(" ");
    }

    function displayReset() {
        container.innerHTML = "";
    }

    function readText() {
        const utterThis = new SpeechSynthesisUtterance(resultDisplay.innerText);
        synth.speak(utterThis);
    }

    function choiceButtonClicked(choice) {
        selectedPath.push(choice);
        updateSelectedPath();
        if (choice.choices) {
            displayCurrentChoices(choice.choices);
        } else {
            if (choice.end) readText();
            displayReset();
        }
    }

    function displayCurrentChoices(choices) {
        container.innerHTML = "";
        choices.forEach((choice) => {
            const button = generateChoiceButton(choice);
            button.onclick = () => choiceButtonClicked(choice);
            container.appendChild(button);
        });
    }

    displayCurrentChoices(CHOICES);
})();
