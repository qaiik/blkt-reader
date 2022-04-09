let userName = "";
let nadcm = true;
setInterval(()=>{
  if (document.querySelector("#app > div > div") && document.querySelector("#app > div > div > div.styles__feedbackContainer___7PzgR-camelCase > div > div.styles__header___2daxi-camelCase") && document.querySelector("#app > div > div > div.styles__feedbackContainer___7PzgR-camelCase > div > div.styles__header___2daxi-camelCase").innerText != "CORRECT" && document.querySelector("#app > div > div > div.styles__feedbackContainer___7PzgR-camelCase > div > div.styles__header___2daxi-camelCase").innerText != "INCORRECT") {
    document.querySelector("#app > div > div").style.backgroundColor = "black"
  }

  if (document.querySelector("#app > div > div > div.styles__feedbackContainer___7PzgR-camelCase > div > div.styles__header___2daxi-camelCase").innerText === "INCORRECT") {
    document.querySelector("#app > div > div > div.styles__feedbackContainer___7PzgR-camelCase > div").style.backgroundColor = "black";
  }
  
  if (document.querySelector("#app > div > div > div.styles__feedbackContainer___7PzgR-camelCase > div > div.styles__header___2daxi-camelCase").innerText === "CORRECT") {
    document.querySelector("#app > div > div > div.styles__feedbackContainer___7PzgR-camelCase > div").style.backgroundColor = "rgb();"
  }
  
  if (document.querySelector("#header")) {
    document.querySelector("#header").style.backgroundColor = "black"
  }
  
  if (document.querySelector("#header > div.styles__headerTextLeft___3zPwI-camelCase")) {
    userName = document.querySelector("#header > div.styles__headerTextLeft___3zPwI-camelCase").innerText;
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__introHeader___Dzfym-camelCase")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__introHeader___Dzfym-camelCase").innerHTML = `WELCOME, ${userName.toUpperCase()}<br><div style="font-size: 14px; color: white;">[CRYPTOMOD VERSION 0.0.1 BY LOGAN BIRK]</div>`
  }
  
  if (document.querySelector("#app > div > div > div.styles__loadingText___2fDqU-camelCase")) {
    document.querySelector("#app > div > div > div.styles__loadingText___2fDqU-camelCase").innerText = "[LOADING]\nGet Ready"
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(1)")) {
    if (nadcm) {
      document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(1)").innerText = "> Different IP detected. Initiating setup."
      nadcm = false
    }
  }
  
  if (document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div")) {
    document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div").innerText = document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div").innerText.replace("₿", "Crypto: ")
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(2)")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(2)").innerText = "> Welcome to the terminal."
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(3)")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div:nth-child(3) > div:nth-child(3)").innerText = "> Choose between one of the passwords below."
  }
  
  if (document.querySelector("#app > div > div > div:nth-child(3) > div > div.styles__answersHolder___3LYNs-camelCase")) {
    document.querySelector("#app > div > div > div:nth-child(3) > div > div.styles__answersHolder___3LYNs-camelCase").children.forEach(e=>{
      e.firstChild.style.backgroundColor = "white"
    })
  }
}, 1)
  
