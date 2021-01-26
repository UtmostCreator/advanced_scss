function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
    console.log('loaded');
}

let body = document.querySelector('body');
if(body) {
    docReady(body.classList.remove('preload'));
}
