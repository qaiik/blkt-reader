let userName = "";
let nadcm = true;
setInterval(()=>{
  if (document.querySelector("#header > div.styles__headerTextLeft___3zPwI-camelCase")) {
    userName = document.querySelector("#header > div.styles__headerTextLeft___3zPwI-camelCase").innerText;
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__introHeader___Dzfym-camelCase")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__introHeader___Dzfym-camelCase").innerText = `WELCOME, ${userName.toUpperCase()}               [CRYPTO]`
  }
  
  if (document.querySelector("#app > div > div > div.styles__loadingText___2fDqU-camelCase")) {
    document.querySelector("#app > div > div > div.styles__loadingText___2fDqU-camelCase").innerText = "[LOADING]\nGet Ready"
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(1)")) {
    if (nadcm) {
      document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(1)").innerText = "[CRYPTOMOD VERSION 0.0.1 BY LOGAN BIRK]"
      nadcm = false
    }
  }
}, 1)
  
