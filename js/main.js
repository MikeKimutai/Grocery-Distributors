function stickyMenu() {
    var sticky=document.getElementById('sticky');
    if (window.pageXOffset >220) {
        sticky.classList.add('sticky');
    }
    else{
        sticky.classList.remove('sticky');
    }
}
window.onscroll = function() {
   stickyMenu(); 
}