var typed = new Typed (".text",{
    strings:['Frontend Developer', 'Web Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});


function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }