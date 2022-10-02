function restoreFunction(name) {
  let ifrof = document.createElement("iframe")
  ifrof.style.visibility = "hidden"
  ifrof.style.width = "0px"
  ifrof.style.height = "0px"
  ifrof.scrolling = "no"
  document.body.appendChild(ifrof)
  let fnc = ifrof.contentWindow[name];
  return fnc
}

Object.values($("#app > div > div"))[1].children[0]._owner.stateNode.setState({ unlocks: Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find(x=>x.exports?.a?.toString().includes('UFO')).exports.a.toString().split('"').filter(b => !(b.startsWith(';') || b.startsWith(':') || b.startsWith('function') || b.startsWith('}'))) });

restoreFunction("alert")("made by zastix");
