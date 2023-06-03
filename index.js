window.addEventListener("scroll", function() {
    const header= document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
})

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar--links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})