var about = {
    content: "\n# Proclub Team beyond than developer team \nWe are a young passionate people who like playing riddle, attending history class and watching anime in the same time. We also have same vision about how to make great digital product to solve any human problem. We believe that internet not only produce a toon of meme and shit posting but also give impact to build the world in a better place.\n",
    injectBottom: function () {
        document.getElementById('bottom').innerHTML = "\n            <div id=\"about-image\">\n                <div>\n                    <img width=\"200px\" src=\"./assets/images/danu.png\" alt=\"ASEAN logo\">\n                    <img width=\"400px\" src=\"./assets/images/ginan.png\" alt=\"ASEAN logo\">\n                    <img width=\"220px\" src=\"./assets/images/hansa.png\" alt=\"ASEAN logo\">\n                </div>\n\n                <div class=\"columns is-centered\">\n                    <div class=\"column\">\n                        <div><a class=\"link\" href=\"https://www.linkedin.com/in/ganeshad/\" target=\"_blank\">Ganesha Danu</a></div>\n                        <div>\n                            <img src=\"./assets/images/Line7.svg\" alt=\"\">\n                        </div>\n                        <div>Developer</div>\n                    </div>\n                    <div class=\"column\">\n                        <div><a class=\"link\" href=\"https://www.linkedin.com/in/ginanjarwidya/\" target=\"_blank\">Ginanjar Widya</a></div>\n                        <div>\n                            <img src=\"./assets/images/Line7.svg\" alt=\"\">\n                        </div>\n                        <div>Designer</div>\n                    </div>\n                    <div class=\"column\">\n                        <div><a class=\"link\" href=\"https://www.linkedin.com/in/hansa-mustada/\" target=\"_blank\">Hansa Mustada</a></div>\n                        <div>\n                            <img src=\"./assets/images/Line7.svg\" alt=\"\">\n                        </div>\n                        <div> Mentor </div>\n                    </div>\n                </div>\n                </div> \n        ";
    },
    injectHeader: function () {
    },
    nextRoute: "",
    nextTitle: "",
    extraContent: "We made this website fully open soure. You can check our <a style=\"color: white; text-decoration: underline\" href=\"http://github.com/blinfoldking/future-ready-asean\"> repo</a> to start contribute!",
    extraIcon: "./assets/images/github.svg",
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function navigateTo(article) {
    var route;
    switch (article) {
        case "home":
            route = home;
            break;
        case "about":
            route = about;
            break;
        case "food-demand":
            route = foodDemand;
            break;
        case "green-revolution":
            route = greenRevolution;
            break;
        case "sustain":
            route = intensification;
            break;
        case "key-action":
            route = keyAction;
            break;
        default:
            location.href = "/index.html";
            break;
    }
    document.getElementById('header').innerHTML = '';
    document.getElementById('extra').innerHTML = '';
    document.getElementById('bottom').innerHTML = '';
    var nextElem = document.getElementById('next');
    if (route.nextRoute == "") {
        nextElem.innerHTML = "";
    }
    else {
        nextElem.innerHTML = "\n                Next Section\n                <div>\n                    <h3 class=\"title is-3\">\n                        <a target=\"#top\" onclick=\"navigateTo('" + route.nextRoute + "'); toTop('main-container')\">" + route.nextTitle + "</a>\n                        <div class=\"line-next\">\n                            <img src=\"./assets/images/LineNext.svg\" alt=\"\">\n                        </div>\n                    </h3>\n                </div>\n\n        ";
    }
    var converter = new showdown.Converter(), html = converter.makeHtml(route.content);
    select(article);
    document.getElementById('content').innerHTML = html;
    route.injectHeader();
    route.injectBottom();
    injectChecklist(route);
    if (article == 'key-action') {
        document.getElementById('next').innerHTML = "\n            <div style=\"text-align: left\">\n                <h4 class=\"title is-4\">References</h4>\n                <a class=\"link\" href=\"https://hbr.org/2016/04/global-demand-for-food-is-rising-can-we-meet-it\">\n                    hbr.org/2016/04/global-demand-for-food-is-rising-can-we-meet-it</a> <br>\n                <a class=\"link\" href=\"https://foodsource.org.uk/building-blocks/what-sustainable-intensification\">\n                foodsource.org.uk/building-blocks/what-sustainable-intensification</a> <br>\n                <a class=\"link\" href=\"https://ncbi.nlm.nih.gov/pmc/articles/PMC3411969/ \">\n                foodsource.org.uk/building-blocks/what-sustainable-intensification</a> <br>\n                <a class=\"link\" href=\"https://theguardian.com/environment/2011/nov/28/un-farmers-produce-food-population\">\n                theguardian.com/environment/2011/nov/28/un-farmers-produce-food-population </a><br>\n                <a class=\"link\" href=\"https://asean.org/storage/2012/05/ASEAN-Multisectoral-Framework-for-climate-change.pdf\">\n                asean.org/storage/2012/05/ASEAN-Multisectoral-Framework-for-climate-change.pdf </a><br>\n            </div> \n        ";
    }
    if (article == 'about') {
        document.getElementById('next').innerHTML = "\n            <div style=\"margin:auto; text-align: center; padding: 0; margin-top: -20px\">\n                <img src=\"./assets/images/TechStack.svg\"></img>\n            </div>\n        ";
    }
    var commonRevealOpt = {
        container: '#main-container',
    };
    ScrollReveal().reveal('#header', __assign({ delay: 200 }, commonRevealOpt));
    ScrollReveal().reveal('h1', __assign({ delay: 300 }, commonRevealOpt));
    ScrollReveal().reveal('#content img', __assign({ delay: 300 }, commonRevealOpt));
    ScrollReveal().reveal('h3 a', __assign({ delay: 200 }, commonRevealOpt));
    ScrollReveal().reveal('p:nth-child(1)', __assign({ delay: 500 }, commonRevealOpt));
    ScrollReveal().reveal('#content p', __assign({ delay: 600 }, commonRevealOpt));
    ScrollReveal().reveal('#content h3', __assign({ delay: 550 }, commonRevealOpt));
    ScrollReveal().reveal('#bottom', __assign({ delay: 800 }, commonRevealOpt));
    ScrollReveal().reveal('#extra', __assign({ delay: 500 }, commonRevealOpt));
    ScrollReveal().reveal('.next-section', __assign({ delay: 200 }, commonRevealOpt));
    ScrollReveal().reveal('.blog-footer, line-section', __assign({ delay: 400 }, commonRevealOpt));
    var anchors = document.getElementsByTagName('a');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].target = '_blank';
    }
}
function select(article) {
    var items = document.getElementsByClassName("nav-item");
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("selected");
        if (items[i].id == article) {
            items[i].classList.add("selected");
        }
    }
}
function injectChecklist(route) {
    var content = document.getElementById('extra');
    if (route.extraIcon == '') {
        content.innerHTML == "";
        content.classList.remove('extra');
        return;
    }
    content.classList.add('extra');
    content.innerHTML = " \n        <div class=\"columns\">\n            <div class=\"column is-1 checkmark\"> \n                <img src=\"" + route.extraIcon + "\" alt=\"\">\n            </div>\n            <p>" + route.extraContent + "</p>\n        </div>        \n    ";
}
var foodDemand = {
    content: "\n# Food Demand\nOver the last century, the global population has quadrupled. In 1915, there were 1.8 billion people in the world. Today, according to the most recent estimate by the UN, there are 7.3 billion people \u2014 and we may reach 9.7 billion by 2050. This growth, along with rising incomes in developing countries (which cause dietary changes such as eating more protein and meat) are driving up global food demand.\n### Human Population Growth\n![Population Growth](./assets/images/Graph.svg \"Population Growth\")\n    ",
    injectHeader: function () {
    },
    injectBottom: function () { },
    nextRoute: "green-revolution",
    nextTitle: "Green Revolution",
    extraContent: "Food demand is expected to increase anywhere between 59% to 98% by 2050. This will shape agricultural markets in ways we have not seen before. Farmers worldwide will need to increase crop production, either by increasing the amount of agricultural land to grow crops or by enhancing productivity on existing agricultural lands through fertilizer and irrigation and adopting new methods like precision farming.",
    extraIcon: "./assets/images/question.svg",
};
var greenRevolution = {
    content: "\n# Green Revolution\nThe Green Revolution is a term used to refer to the program of increasing food production per hectare of \nland that first started in Mexico in the 1940s. It\u2019s Technology continues to develop with assistance from \ngovernment and private institutions, including the Rockefeller Foundation and the Ford Foundation\n\n![Norman Borlaug](./assets/images/poto.svg \"Norman Borlaug\")\n\n*Norman Borlaug*\n![](./assets/images/Line7.svg \"Norman Borlaug\")\n*Father of Green Revolution*\n\n![](./assets/images/greenRevo.svg \"Norman Borlaug\")\n    ",
    injectHeader: function () {
    },
    injectBottom: function () { },
    nextRoute: "sustain",
    nextTitle: "Sustainable Intensification Agriculture",
    extraContent: "The Green revolution contributed to widespread poverty reduction, averted hunger for millions of people, and avoided the conversion of thousands of hectares of land into agricultural cultivation with. Impact of intensification systems increase food supplies with means low input to get higher return. But, this system also triggers the spread of plant pests, destroys biodiversity, pollutes air, water and soil. By 2050, the world will have no choice but to intensification agriculture to further boost food production. We need a new paradigm about how agriculture systems can concern about environment.",
    extraIcon: "./assets/images/question.svg",
};
var home = {
    content: "\n# Food Security depends on *how we treat our planet.*\n> Climate change presents a critical challenge for food security. \n[The UN Food and Agriculture Organisation (FAO)]( http://www.fao.org/ ) estimates that farmers will have to produce 70% more food by 2050 to meet the needs of the [world's expected 9-billion-strong population]( https://www.theguardian.com/environment/2011/oct/23/child-6bn-population-adnan-nevic). Intensification came as a solution since the Green Revolution declared to fulfill food supply but poor farming practices had contributed to a decrease in productivity of the world's farmland, entail high inputs of synthetic chemical fertilizers, pesticides, tillage, and irrigation that have profound environmental impacts, and which can potentially undermine future food production and also the ecosystem.\n",
    injectHeader: function () {
        var header = document.getElementById('header');
        header.innerHTML = "\n            <div id=\"welcome-image\">\n                <img width=\"400px\" src=\"./assets/images/defika.png\" alt=\"\">\n                <img width=\"320px\" src=\"./assets/images/eduardo.png\" alt=\"\">\n                <img width=\"300px\" src=\"./assets/images/bbh.png\" alt=\"\">\n                <img width=\"300px\" src=\"./assets/images/nandhu.png\" alt=\"\">\n            </div> \n        ";
        var images = header.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].addEventListener('load', function () {
            });
        }
    },
    injectBottom: function () { },
    nextRoute: "food-demand",
    nextTitle: "Food Demand",
    extraContent: "Sustainability Intensification has been suggested by some as one contribution to reconciling the need for more environmentally benign agriculture while advancing global food security. It denotes the linked goals of maintaining or increasing the productivity of existing farmland while reducing the environmental impacts of agriculture. Integration with ASEAN Multi-Sectoral Framework on Climate Change: Agriculture and Forestry towards Food Security (AFCC) will be the best scale and feasible implementation to tackle a problem about food security.",
    extraIcon: "./assets/images/correct-symbol.svg",
};
function toTop(id) {
    document.getElementById(id).scrollTop = 0;
}
loadingAssets();
var keyAction = {
    content: "\n# Key Action for ASEAN\nRecognizing that Southeast Asia is the one of the most vulnerable regions of the world in terms of adverse climate change impacts that can undermine food and nutrition security and the attainment of SDGs, and capitalizing on its potential to strengthen the resilience of its people and ecosystems towards a more \u2028sustainable future, the development of a more comprehensive multi-sectoral strategic framework that builds on the existing ASEAN Multi-sectoral Framework on Climate Change: Agriculture and Forestry Towards Food Security (AFCC) was deemed of central importance.\n<div class=\"video-frame\">\n    <div style=\"text-align: center;\">\n        <iframe style=\"margin: auto; height:400px; max-height: 300px\" width=\"450px\" height=\"300px\" src=\"https://www.youtube.com/embed/_KpT92-uzCQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    <div>\n        <img src=\"./assets/images/afcc.svg\"></img> \n        </div>\n</div>\n\n",
    injectHeader: function () {
    },
    injectBottom: function () { },
    nextRoute: "key-action",
    nextTitle: "Key Action for ASEAN",
    extraContent: "AFCC is a unique platform that not only facilitates dialogue and the exchange of information across sectors, but which also enables joint strategy setting and priority identification, and offers the potential for future joint action and resource mobilization, on issues related to climate change and food security. Sustainable Intensification Agriculture can be integrated into the fourth component which will later be the subject of discussion and policy implementation on a regional basis.",
    extraIcon: "./assets/images/correct-symbol.svg",
};
function getAssets() {
    return [
        "Indonesia.svg",
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
    ];
}
var loaded = 0;
function loadedSuccess() {
    loaded += 1;
    if (loaded == getAssets().length) {
        removeLoading();
    }
    console.log('loaded');
}
function removeLoading() {
    var loading = document.getElementById('loading');
    document.getElementsByClassName('sidebar')[0].classList.add('animate');
    setTimeout(function () {
        loading.classList.add('animate');
        navigateTo("home");
    }, 500);
    setTimeout(function () {
        loading.parentElement.removeChild(loading);
    }, 1500);
    var navs = document.getElementsByClassName('nav-item');
    for (var i = 0; i < navs.length; i++) {
        navs[i].classList.add('hide');
    }
    setTimeout(function () {
        var navs = document.getElementsByClassName('nav-item');
        for (var i = 0; i < navs.length; i++) {
            ScrollReveal().reveal("#" + navs[i].id, { delay: 100 * (i + 1) });
            navs[i].classList.remove('hide');
        }
    }, 1600);
}
function loadingAssets() {
    console.log(getAssets());
    getAssets().forEach(function (asset) {
        var img = new Image();
        img.onload = loadedSuccess;
        img.src = "./assets/images/" + asset;
    });
}
var intensification = {
    content: "\n# Sustainable Intensification Agriculture\nAccording to FAO, farmers can increase yields, maintain soil fertility, save time and production costs by switching to a sustainable intensification agriculture\n### Sustainable Intensification Cycle\n![Cycle](./assets/images/Cycle.svg \"cycle\")\n",
    injectHeader: function () {
    },
    injectBottom: function () { },
    nextRoute: "key-action",
    nextTitle: "Key Action for ASEAN",
    extraContent: "Sustainable intensification has been suggested by some as one contribution to reconciling the need for more environmentally benign agriculture while advancing global food security. It denotes the linked goals of maintaining or increasing the productivity of existing farmland, while reducing the environmental impacts of agriculture. It will need to be accompanied by policy region, to implementing that system and scaling the benefit.",
    extraIcon: "./assets/images/question.svg",
};
//# sourceMappingURL=build.js.map