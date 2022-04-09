let boxOrder = ["Safari", "Aquatic", "Bot", "Space", "Breakfast", "Medieval", "Wonderland"]

let bn = "Safari" //Customize this as seen in list above

function b(box) {
    document.querySelector("#app > div > div > div.arts__profileRegularBody___2fvy5-camelCase > div > div.styles__boxContainer___1rYqq-camelCase > div:nth-child(3) > div.styles__middleBoxContainer___3Ld4h-camelCase > div.styles__miniBlookContainer___1GnHF-camelCase").click()
    document.querySelector("#app > div > div > div.arts__modal___VpEAD-camelCase > form > div.styles__holder___3CEfN-camelCase > div > div:nth-child(1)").click()
    document.querySelector("#app > div > div > div.arts__profileRegularBody___2fvy5-camelCase > div > div.styles__boxContainer___1rYqq-camelCase").children[boxOrder.indexOf(box)].children[1].click()
}

setInterval(()=>{
  b(bn)
},1)

//Spends all your money on a box
