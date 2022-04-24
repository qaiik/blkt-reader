
function restoreFunction(name) {
  let ifrof = document.createElement("iframe")
  ifrof.style.visibility = "hidden"
  ifrof.style.width = "0px"
  ifrof.style.height = "0px"
  ifrof.scrolling = "no"
  document.body.appendChild(ifrof)
  let fnc = ifrof.contentWindow[name];
  ifrof.parentNode.removeChild(ifrof)
  return fnc
}

//alert
//prompt
//confirm
//eval
