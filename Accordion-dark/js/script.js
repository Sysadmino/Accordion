let accordions = document.querySelectorAll(".accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click',function(){
    this.classList.toggle('is-open');

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}
