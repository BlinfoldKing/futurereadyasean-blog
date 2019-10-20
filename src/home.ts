let home = {
    content: `
# Food Security depends on *how we treat our planet.*
> Climate change presents a critical challenge for food security. 
[The UN Food and Agriculture Organisation (FAO)]( http://www.fao.org/ ) estimates that farmers will have to produce 70% more food by 2050 to meet the needs of the [world's expected 9-billion-strong population]( https://www.theguardian.com/environment/2011/oct/23/child-6bn-population-adnan-nevic). Intensification came as a solution since the Green Revolution declared to fulfill food supply but poor farming practices had contributed to a decrease in productivity of the world's farmland, entail high inputs of synthetic chemical fertilizers, pesticides, tillage, and irrigation that have profound environmental impacts, and which can potentially undermine future food production and also the ecosystem.
`,

    injectHeader: () => {
        let header = document.getElementById('header')
        header.innerHTML = `
            <div id="welcome-image">
                <img width="400px" src="./assets/images/defika.png" alt="">
                <img width="320px" src="./assets/images/eduardo.png" alt="">
                <img width="300px" src="./assets/images/bbh.png" alt="">
                <img width="300px" src="./assets/images/nandhu.png" alt="">
            </div> 
        `

        let images = header.getElementsByTagName('img')
        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener('load', () => {
                // images[i].classList.add('animate')
            })
        }
    },

    injectBottom: () => { },
    nextRoute: "food-demand",
    nextTitle: "Food Demand",


    extraContent: "Sustainability Intensification has been suggested by some as one contribution to reconciling the need for more environmentally benign agriculture while advancing global food security. It denotes the linked goals of maintaining or increasing the productivity of existing farmland while reducing the environmental impacts of agriculture. Integration with ASEAN Multi-Sectoral Framework on Climate Change: Agriculture and Forestry towards Food Security (AFCC) will be the best scale and feasible implementation to tackle a problem about food security.",
    extraIcon: "./assets/images/correct-symbol.svg",

}