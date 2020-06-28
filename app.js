function makeItBlink() {
    const pointer = document.getElementById('pointer');
    pointer.style.visibility != "hidden" ? pointer.style.visibility = "hidden" : pointer.style.visibility = "visible";
}

setInterval(makeItBlink, 500);