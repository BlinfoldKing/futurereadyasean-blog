function navigateTo(article: string) {
    let route: string
    switch (article) {
        case "home":
            route = home
            break;
        case "nothome":
            route = nothome
            break;
        default:
            break;
    }


    let converter = new showdown.Converter(),
        html = converter.makeHtml(route);


    console.log(html)
    document.getElementById('content').innerHTML = html
}