let about = {
    content: `
# Proclub Team beyond than developer team 
We are a young passionate people who like playing riddle, attending history class and watching anime in the same time. We also have same vision about how to make great digital product to solve any human problem. We believe that internet not only produce a toon of meme and shit posting but also give impact to build the world in a better place.
`,

    injectBottom: () => {
        document.getElementById('bottom').innerHTML = `
            <div id="about-image">
                <div>
                    <img width="200px" src="./assets/images/danu.png" alt="ASEAN logo">
                    <img width="400px" src="./assets/images/ginan.png" alt="ASEAN logo">
                    <img width="220px" src="./assets/images/hansa.png" alt="ASEAN logo">
                </div>

                <div class="columns is-centered">
                    <div class="column">
                        <div>Ganesha Danu</div>
                        <div>
                            <img src="./assets/images/Line7.svg" alt="">
                        </div>
                        <div>Member 1 </div>
                    </div>
                    <div class="column">
                        <div>Ginanjar Widya</div>
                        <div>
                            <img src="./assets/images/Line7.svg" alt="">
                        </div>
                        <div> Member 2 </div>
                    </div>
                    <div class="column">
                        <div>Hansa Mustada</div>
                        <div>
                            <img src="./assets/images/Line7.svg" alt="">
                        </div>
                        <div> Mentor </div>
                    </div>
                </div>
                </div> 
        `
    },

    injectHeader: () => {

    },

    nextRoute: "",
    nextTitle: "",

    extraContent: "We made this website fully open soure. You can check our repo to start contribute!",
    extraIcon: "./assets/images/github.svg",

}