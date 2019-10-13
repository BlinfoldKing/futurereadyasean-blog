function navigateTo(article: string) {
    let route: Content
    switch (article) {
        case "home":
            route = home
            break
        case "about":
            route = about
            break
        case "food-demand":
            route = foodDemand
            break
        default:
            location.href = "/index.html"
            break
    }

    document.getElementById('header').innerHTML = '';
    document.getElementById('extra').innerHTML = '';
    document.getElementById('bottom').innerHTML = '';

    let nextElem = document.getElementById('next')
    if (route.nextRoute == "") {
        nextElem.innerHTML = ""
    } else {
        nextElem.innerHTML = `
                Next Section
                <div>
                    <h3 class="title is-3">
                        <a href="" onclick="navigateTo(${route.nextRoute})">${route.nextTitle}</a>
                        <div class="line-next">
                            <img src="./assets/images/LineNext.svg" alt="">
                        </div>
                    </h3>
                </div>
        `
    }

    let converter = new showdown.Converter(),
        html = converter.makeHtml(route.content)

    select(article)
    document.getElementById('content').innerHTML = html
    route.injectHeader()
    route.injectBottom()
    injectChecklist(route)
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

function injectChecklist(route: Content) {
    let content = document.getElementById('extra')
    if (route.extraIcon == '') {
        content.innerHTML == ""
        content.classList.remove('extra')
        return
    }

    content.classList.add('extra')

    content.innerHTML = ` 
        <div class="columns">
            <div class="column is-1 checkmark"> 
                <img src="${route.extraIcon}" alt="">
            </div>
            <p>${route.extraContent}</p>
        </div>        
    `
}

interface Content {
    content: string
    injectHeader: () => void
    injectBottom: () => void
    nextTitle: string
    nextRoute: string
    extraContent: string
    extraIcon: string
}