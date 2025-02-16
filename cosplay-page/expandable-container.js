const expandables = document.getElementsByClassName("expandable");

for(let parent of expandables) {
  const content = parent.getElementsByClassName("content")[0];
  parent.children[0].onclick = () => {
    parent.classList.toggle("expanded");
    content.style.maxHeight = parent.classList.contains('expanded') ? content.scrollHeight + 'px' : '0';
  }
};