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
        case "green-revolution":
            route = greenRevolution
            break
        case "sustain":
            route = intensification
            break
        case "key-action":
            route = keyAction
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
                        <a target="#top" onclick="navigateTo('${route.nextRoute}'); toTop('main-container')">${route.nextTitle}</a>
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
    if (article == 'key-action') {
        document.getElementById('next').innerHTML = `
            <div style="text-align: left">
                <h4 class="title is-4">References</h4>
                hbr.org/2016/04/global-demand-for-food-is-rising-can-we-meet-it <br>
                foodsource.org.uk/building-blocks/what-sustainable-intensification <br>
                theguardian.com/environment/2011/nov/28/un-farmers-produce-food-population <br>
                asean.org/storage/2012/05/ASEAN-Multisectoral-Framework-for-climate-change.pdf <br>
            </div> 
        `
    }

    let commonRevealOpt: scrollReveal.ScrollRevealObjectOptions = {
        container: '#main-container',
        // reset: true,
    }


    ScrollReveal().reveal('#header', { delay: 200, ...commonRevealOpt });
    ScrollReveal().reveal('h1', { delay: 300, ...commonRevealOpt });
    ScrollReveal().reveal('#content img', { delay: 300, ...commonRevealOpt });
    ScrollReveal().reveal('h3 a', { delay: 200, ...commonRevealOpt });
    ScrollReveal().reveal('p:nth-child(1)', { delay: 500, ...commonRevealOpt });
    ScrollReveal().reveal('#content p', { delay: 600, ...commonRevealOpt });
    ScrollReveal().reveal('#content h3', { delay: 550, ...commonRevealOpt });
    ScrollReveal().reveal('#bottom', { delay: 800, ...commonRevealOpt });
    ScrollReveal().reveal('#extra', { delay: 500, ...commonRevealOpt });
    ScrollReveal().reveal('.next-section', { delay: 200, ...commonRevealOpt });
    ScrollReveal().reveal('.blog-footer, line-section', { delay: 400, ...commonRevealOpt });
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