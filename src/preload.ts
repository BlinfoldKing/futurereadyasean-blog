function getAssets() {
    return [
        "Indonesia.svg"
        "afcc.svg",
        "agriculture.png",
        "bbh.png",
        "correct-symbol.svg",
        "Cycle.svg",
        "danu.png",
        "defika.png",
        "eduardo.png",
        "empirecode.png",
        "fra-logo.png",
        "ginan.png",
        "github.svg",
        "Graph.svg",
        "greenRevo.svg",
        "hansa.png",
        "Line7.svg",
        "LineNext.svg",
        "LineSection.svg",
        "Linetab.svg",
        "Logo-ASEAN-1 1.png",
        "microsoft_1515534252 1.png",
        "nandhu.png",
        "poto.svg",
        "question.svg",
        "rect2.svg",
        "Rectangle3.svg",
        "Rectangle5.svg",
        "Rectangle6.svg",
        "Rectangle 7.svg",
        "Rectangle7.svg",
        "TechStack.svg",
    ]
}


let loaded = 0


function loadedSuccess() {
    loaded += 1;
    if (loaded == getAssets().length) {
        removeLoading()
    }
    console.log('loaded')
}

function removeLoading() {
    let loading = document.getElementById('loading')
    document.getElementsByClassName('sidebar')[0].classList.add('animate')
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

}


function loadingAssets() {
    console.log(getAssets())
    getAssets().forEach((asset) => {
        let img = new Image()
        img.onload = loadedSuccess
        img.src = `./assets/images/${asset}`
    })
}