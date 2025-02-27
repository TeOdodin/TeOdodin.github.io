const expandables = document.querySelectorAll(".expandable");

for(let parent of expandables) {
  const content = parent.querySelector(".content");
  parent.children[0].onclick = () => {
    parent.classList.toggle("expanded");
    content.style.maxHeight = parent.classList.contains('expanded') ? content.scrollHeight + 'px' : '0';
  }
};

const legalNotesButtton = document.querySelector("#mentions_legales_btn");
const legalNotesContainer = document.querySelector("#mentions_legales");
const toggleLegalNotes = () => {
  legalNotesContainer.style.display = legalNotesContainer.style.display !== 'block' ? 'block' : 'none';
};
legalNotesButtton.onclick = toggleLegalNotes;
legalNotesContainer.onclick = toggleLegalNotes;