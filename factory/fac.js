function gfn(str) {
  return str.split(" / ")[0].split("$")[1]
}

function gsn(str) {
  return str.split(" / ")[1].split("s")[0]
}

let nad = true
let nad2 = true
let origST = setTimeout;

setInterval(()=>{
    if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__buttonContainer___3yX9w-camelCase") && nad) {
        document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__buttonContainer___3yX9w-camelCase").firstChild.click()
        nad = false
    }
  
},1)

setInterval(()=>{
    if (document.querySelector("#app > div > div > div.styles__loadingText___2fDqU-camelCase")) {
        setTimeout = (f,t)=>{f()}
    }
    }, 1)

let bdata = {};
let times = 0;
              


    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        if (arguments[1].startsWith("https://api.blooket.com/api/games?gameId=")) {
            this.addEventListener('load', function() {
                bdata = JSON.parse(this.responseText);
            });   
        }
        
        origOpen.apply(this, arguments);
    };


const data = null;


let qid = ""
function get(dat,question) {
    for (let e of dat.questions) {
        if (e.question === question) {
            return e.correctAnswers[0]
        }
        
    }
}
let cor = "";

setInterval(()=>{
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__pageButton___3uI22-camelCase")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__pageButton___3uI22-camelCase").click()
  }
	if (document.querySelector(".fa-check")) {
		document.querySelector(".fa-check").click()
	}
  
  	if (document.querySelector(".styles__guestButton___2jiD9-camelCase")) {
    	document.querySelector(".styles__guestButton___2jiD9-camelCase").click()
  	}
  	if (document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__container___1-bHf-camelCase")) {
	  	document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__container___1-bHf-camelCase").click()
  	}
	if (document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase")) {
	    origST(()=>{
		  document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase").click()
	    },1000)
	    
	}
	
},1)

setInterval(()=>{
	if (document.querySelector("#q1")) {
		Array.from(document.querySelector("#left > div > div.styles__answersHolder___340cg-camelCase").children).forEach(c=>{
      if (c.innerText == get(bdata,document.querySelector("#qText > div").innerText)) {c.firstChild.click()}
    })
	}
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div:nth-child(2) > div.styles__choice2___1aP2D-camelCase > img")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div:nth-child(2) > div.styles__choice2___1aP2D-camelCase > img").click()
  }
  if (document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(2)")) {
    let s1 = document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(1)").innerText.split("\n")[0];
    let s2 = document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(2)").innerText.split("\n")[0];
    let s3 = document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(3)").innerText.split("\n")[0];
    let ur1=0;
    let ur2=0;
    let ur3 = 0;
    if (!document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(1)").innerText.includes("Glitch")) {
    	ur1 = parseInt(gfn(s1)) / parseInt(gsn(s1))
    } else {
	    ur1 = 0
    }
    if (!document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(2)").innerText.includes("Glitch")) {
    	ur2 = parseInt(gfn(s1)) / parseInt(gsn(s1))
    } else {
	    ur2 = 0
    }
    if (!document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(3)").innerText.includes("Glitch")) {
    	ur3 = parseInt(gfn(s1)) / parseInt(gsn(s1))
    } else {
	    ur3 = 0
    }
	  
    
    const o = { ur1, ur2, ur3 };  const name = Object.entries(o).reduce((m, c) => m[1] > c[1] ? m: c)[0];
    if (name === "ur1") {
      document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(1)").click()
    } else if (name === "ur2") {
      document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(2)").click()
    } else if (name === "ur3") {
      document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(3)").click()
    }
      
  }
    
// 	if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__feedbackContainer___7PzgR-camelCase > div.styles__choice___1aMOz-camelCase.styles__choice2___3mKbD-camelCase")) {
// 		document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__feedbackContainer___7PzgR-camelCase > div.styles__choice___1aMOz-camelCase.styles__choice2___3mKbD-camelCase").click()
// 	}
},1)
setInterval(()=>{
  if (document.querySelector("#choices > div.styles__blookChoices____ksoH-camelCase > div:nth-child(2)")) {
    
  }
  
  //upgrade
//   if (document.querySelector("#upgrade0 > div")) {
//     document.querySelector("#upgrade0 > div").click()
//   }

//   if (document.querySelector("#upgrade1 > div")) {
//     document.querySelector("#upgrade1 > div").click()
//   }

//   if (document.querySelector("#upgrade2 > div")) {
//     document.querySelector("#upgrade2 > div").click()
//   }
  
//   if (document.querySelector("#upgrade3 > div")) {
//     document.querySelector("#upgrade3 > div").click()
//   }
//   if (document.querySelector("#upgrade4 > div")) {
//     document.querySelector("#upgrade4 > div").click()
//   }
//   if (document.querySelector("#upgrade5 > div")) {
//     document.querySelector("#upgrade1 > div").click()
//   }
//   if (document.querySelector("#upgrade6 > div")) {
//     document.querySelector("#upgrade1 > div").click()
//   }
//   if (document.querySelector("#upgrade7 > div")) {
//     document.querySelector("#upgrade7 > div").click()
//   }
//   if (document.querySelector("#upgrade8 > div")) {
//     document.querySelector("#upgrade8 > div").click()
//   }
  
//   if (document.querySelector("#upgrade9 > div")) {
//     document.querySelector("#upgrade9 > div").click()
//   }
})

setInterval(()=>{
    if (document.querySelector("#body > div > div.arts__modal___VpEAD-camelCase > form > div.styles__holder___3CEfN-camelCase > div > div")) {
    document.querySelector("#body > div > div.arts__modal___VpEAD-camelCase > form > div.styles__holder___3CEfN-camelCase > div > div").click()
}
})

setInterval(()=>{
    if (document.querySelector("#choices > div.styles__skipButton___3Ppa_-camelCase")) {
        document.querySelector("#choices > div.styles__skipButton___3Ppa_-camelCase").click()
    }
    })
setInterval(()=>{
    if (document.querySelector("#left > div > div.styles__remindText___25J6V-camelCase")) {
          if (document.querySelector("#upgrade0 > div")) {
    document.querySelector("#upgrade0 > div").click()
  }

  if (document.querySelector("#upgrade1 > div")) {
    document.querySelector("#upgrade1 > div").click()
  }

  if (document.querySelector("#upgrade2 > div")) {
    document.querySelector("#upgrade2 > div").click()
  }
  
  if (document.querySelector("#upgrade3 > div")) {
    document.querySelector("#upgrade3 > div").click()
  }
  if (document.querySelector("#upgrade4 > div")) {
    document.querySelector("#upgrade4 > div").click()
  }
  if (document.querySelector("#upgrade5 > div")) {
    document.querySelector("#upgrade1 > div").click()
  }
  if (document.querySelector("#upgrade6 > div")) {
    document.querySelector("#upgrade1 > div").click()
  }
  if (document.querySelector("#upgrade7 > div")) {
    document.querySelector("#upgrade7 > div").click()
  }
  if (document.querySelector("#upgrade8 > div")) {
    document.querySelector("#upgrade8 > div").click()
  }
  
  if (document.querySelector("#upgrade9 > div")) {
    document.querySelector("#upgrade9 > div").click()
  }
    }
})

setInterval(()=>{
  if (document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div > i")) {
    setTimeout = function (s,t) {
      s()
    }
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div:nth-child(1) > div > div.styles__header___3rdHC-camelCase")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div:nth-child(1) > div > div.styles__header___3rdHC-camelCase").innerText = "[BLKT-READER]"
  }
	
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div:nth-child(1) > div > div.styles__container___3qYKT-camelCase > div > div.styles__blookContainer___36LK2-camelCase.styles__loaderBox___9moZZ-camelCase > img")) {
	  document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div:nth-child(1) > div > div.styles__container___3qYKT-camelCase > div > div.styles__blookContainer___36LK2-camelCase.styles__loaderBox___9moZZ-camelCase > img").src = "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/megaBot.svg"
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase").click()
  }
  
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__playerWrapper___2T5wi-camelCase > div.styles__noPlayers___1Wz34-camelCase > div")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__playerWrapper___2T5wi-camelCase > div.styles__noPlayers___1Wz34-camelCase > div").click()
  }
  
  if (document.querySelector("#header > div.styles__headerTextLeft___3zPwI-camelCase > i.styles__readIcon___2wn6q-camelCase.fas.fa-volume-up")) {
    setTimeout = function (f,t){f()}
  }
})

// document.querySelector("#app > div > div > div.styles__questionContainer___1u3eL-camelCase > div > div.styles__questionContainer___3u_c9-camelCase > div > div")
