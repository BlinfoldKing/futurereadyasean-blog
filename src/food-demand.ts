let foodDemand = {
    content: `
# Food Demand
Over the last century, the global population has quadrupled. In 1915, there were 1.8 billion people in the world. Today, according to the most recent estimate by the UN, there are 7.3 billion people — and we may reach 9.7 billion by 2050. This growth, along with rising incomes in developing countries (which cause dietary changes such as eating more protein and meat) are driving up global food demand.
### Human Population Growth
![some text](./assets/images/Graph.svg "Population Growth")
    `,

    injectHeader: () => {
    },

    injectBottom: () => { },
    nextRoute: "food-supply",
    nextTitle: "Food Demand",


    extraContent: "Food demand is expected to increase anywhere between 59% to 98% by 2050. This will shape agricultural markets in ways we have not seen before. Farmers worldwide will need to increase crop production, either by increasing the amount of agricultural land to grow crops or by enhancing productivity on existing agricultural lands through fertilizer and irrigation and adopting new methods like precision farming.",
    extraIcon: "./assets/images/question.svg",

}