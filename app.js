function makeItBlink() {
    const pointer = document.getElementById('pointer');
    pointer.style.display != "none" ? pointer.style.display = "none" : pointer.style.display = "block";
}

setInterval(makeItBlink, 500);