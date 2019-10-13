function navigateTo(article: string) {
    let route: string
    switch (article) {
        case "home":
            route = home
            break
        default:
            route = nothome
            break
    }


    let converter = new showdown.Converter(),
        html = converter.makeHtml(route)

    select(article)
    document.getElementById('content').innerHTML = html
}

function select(article: string) {
    let items: HTMLCollectionOf<Element> = document.getElementsByClassName("nav-item")
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("selected")
        if (items[i].id == article) {
            items[i].classList.add("selected")
        }
    }
}