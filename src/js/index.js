let removePreloadClass = () => {
    document.body.classList.remove('preload')
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
        console.log('resources are loaded!');
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
    if(document.readyState === "complete" || document.readyState === "interactive") {
        console.log('resources are loaded!');
    }
}

docReady(removePreloadClass);
    // docReady(console.log('text'));
// window.onload = function(){document.body.classList.remove("preload");}
