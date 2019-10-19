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
