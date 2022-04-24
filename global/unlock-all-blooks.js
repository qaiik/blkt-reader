function unlock() {
  Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state.lockedBlooks = []
}

function gsblook() {
  return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state.selectedBlook
}

let blooks = Array.from(document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div > div.styles__lowerContainer___1J56B-camelCase > div.styles__blookArrayContainer___ZrR1Y-camelCase").children);
let csblook = gsblook();
let blookElm;

unlock()
blooks.forEach((b)=>{
    let name = b.firstChild.firstChild.alt.split(" Blook")[0];
    if (name === csblook) {
        blookElm = b
    }
})

document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div > div.styles__lowerContainer___1J56B-camelCase > div.styles__blookArrayContainer___ZrR1Y-camelCase > div:nth-child(1)").click()
let iint = setInterval(()=>{
  blookElm.click()
  if (gsblook() === csblook) {
    clearInterval(iint)
  }
})
