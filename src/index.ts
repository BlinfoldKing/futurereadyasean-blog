function toTop(id: string) {
    document.getElementById(id).scrollTop = 0;
}

let loading = document.getElementById('loading')
setTimeout(function () {
    loading.classList.add('animate')
    navigateTo("home")
}, 500)


setTimeout(function () {
    loading.parentElement.removeChild(loading)
}, 1500)


let navs = document.getElementsByClassName('nav-item')
for (let i = 0; i < navs.length; i++) {
    navs[i].classList.add('hide')
}

setTimeout(function () {
    let navs = document.getElementsByClassName('nav-item')
    for (let i = 0; i < navs.length; i++) {
        ScrollReveal().reveal(`#${navs[i].id}`, { delay: 100 * (i + 1) })

        navs[i].classList.remove('hide')
    }
}, 1600)
