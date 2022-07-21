let tabNavi = document.getElementById("top_navi")

document.addEventListener('scroll', function () {
    let currentScroll = document.documentElement.scrollTop
    if (currentScroll < 170) {
        tabNavi.style.zIndex = "-1"
        tabNavi.style.opacity = "0"
    } else if (currentScroll > 170) {
        tabNavi.style.zIndex = "99"
        tabNavi.style.opacity = "1"
    }
})  


tabNavi.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
})