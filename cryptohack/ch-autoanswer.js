let nad = true
let nad2 = true

setInterval(()=>{
    if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__buttonContainer___3yX9w-camelCase") && nad) {
        document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__buttonContainer___3yX9w-camelCase").firstChild.click()
        nad = false
    }
  
  if (document.querySelector("#app > div > div > div:nth-child(2) > div > form > div.styles__inputRow___wymbk-camelCase > input") == null && nad2) {
    setTimeout = function (f,time) {
      f()
    }, 1)
    nad2 = false
},1)
