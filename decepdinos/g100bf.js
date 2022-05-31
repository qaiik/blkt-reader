function hack() {
  return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner
}
hack().stateNode.state.fossilMult=1e9
