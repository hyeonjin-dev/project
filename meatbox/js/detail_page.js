document.addEventListener('scroll', function () {
    let currentScroll = document.documentElement.scrollTop
    let tabBtn = document.getElementById("tab_page")
    let topDetail = document.getElementById("top_detail")

    if (currentScroll >= topDetail.clientHeight) {
        tabBtn.style.position = "fixed"
        tabBtn.style.top = "90px"
        topDetail.style.marginBottom = "40px"//fiexd되어 생긴 여분공간에 아래쪽 요소가 움직이는 것 방지
    } else {
        tabBtn.style.position = "static"
        tabBtn.style.top = "auto"
        topDetail.style.marginBottom = "0"
    }
})