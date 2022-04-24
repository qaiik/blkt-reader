let ifrof = document.createElement("iframe")
ifrof.style.visibility = "hidden"
ifrof.style.width = "0px"
ifrof.style.height = "0px"
document.body.appendChild("ifrof")
function restoreFunction(name) {
  return ifrof.contentWindow[name]
}
