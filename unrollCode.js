async function unrollSubelementContent(preElem, code, elemEnd, htmlElem) {
    const closingTagStart = code.html.indexOf("<", elemEnd);
    const closingTagEnd = code.html.indexOf(">", closingTagStart);
    const htmlClosingTag = code.html.substring(
        closingTagStart,
        closingTagEnd + 1
    );
    const htmlElemContent = code.html.substring(elemEnd + 1, closingTagStart);

    const tmpPreMeContacter = preElem.innerHTML;
    for (let i = 0; i < htmlElemContent.length; i++) {
        preElem.innerHTML =
            tmpPreMeContacter +
            htmlElem +
            htmlElemContent.substring(0, i + 1) +
            htmlClosingTag;
        await new Promise((resolve) => setTimeout(resolve, 70));
    }
    code.html = code.html.substr(closingTagEnd + 1);
}

function unrollCharacter(preElem, nextChar, code) {
    preElem.innerHTML += nextChar;
    code.html = code.html.substr(1);
}

function unrollCode(preElem, endingHandler) {
    let code = { html: preElem.innerHTML };
    preElem.innerHTML = "";
    (async () => {
        while (code.html.length > 0) {
            let nextChar = code.html[0];
            if (nextChar === "<") {
                const subElementEnd = code.html.indexOf(">");
                const subElement = code.html.substring(0, subElementEnd + 1);
                await unrollSubelementContent(preElem, code, subElementEnd, subElement);
            } else {
                switch (nextChar) {
                    case "&":
                        switch (code.html.substring(0, 4)) {
                            case "&gt;":
                                preElem.innerHTML += ">";
                                code.html = code.html.substr(4);
                                break;
                            default:
                                unrollCharacter(preElem, nextChar, code);
                        }
                        break;
                    default:
                        unrollCharacter(preElem, nextChar, code);
                }
            }
            await new Promise((resolve) => setTimeout(resolve, 70));
        }
        if (typeof endingHandler === "function") endingHandler();
    })();
}
