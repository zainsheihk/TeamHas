var acc = document.getElementsByClassName("accordion-header");
var i;
console.log(acc);
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(this.nextElementSibling);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.borderWidth = "0px";
      panel.style.marginBottom = "0px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.borderWidth = "1px";
      panel.style.marginBottom = "20px";
    }
  });
}
