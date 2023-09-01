(() => {
    const resultDisplay = document.querySelector("body div.result > p");
    const container = document.querySelector("body div.container");
    const selectedPath = [];

    function generateChoiceButton(choice) {
        const button = document.createElement("button");
        const icon = document.createElement("span");
        button.classList.add("choice");
        icon.classList.add("icon", "fa-solid");

        if (choice.icon) icon.classList.add(...choice.icon.split(" "));
        if (choice.color) icon.style.color = choice.color;
        button.appendChild(icon);
        button.append(choice.name);
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

    function choiceButtonClicked(choice) {
        selectedPath.push(choice);
        updateSelectedPath();
        if (choice.choices) {
            displayCurrentChoices(choice.choices);
        } else {
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
