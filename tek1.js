let bdata = {};
let times = 0;
Math.random = function () {
    if (times === 0 && document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__pageButton___3uI22-camelCase")) {
      times+=1;
      return 0.0000000000000001
    } else {
      times = 0;
      return 0.9999999999999999
    }
}
              


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
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.arts__modal___VpEAD-camelCase.styles__fishModal___PqTdM-camelCase.styles__fishModalButton___2-VaN-camelCase")) {
	  document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.arts__modal___VpEAD-camelCase.styles__fishModal___PqTdM-camelCase.styles__fishModalButton___2-VaN-camelCase").click()
  }
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
	    setTimeout(()=>{
		  document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase").click()
	    },1000)
	    
	}
	
},1)

setInterval(()=>{

	gar = ()=>{
		if (document.querySelector("#app > div > div > div.styles__questionContainer___3Aq4Z-camelCase > div > div.styles__questionContainer___3u_c9-camelCase > div.styles__questionText___2MlSZ-camelCase > div")) {
			
			let ansr = get(bdata,document.querySelector("#app > div > div > div.styles__questionContainer___3Aq4Z-camelCase > div > div.styles__questionContainer___3u_c9-camelCase > div.styles__questionText___2MlSZ-camelCase > div").innerText)
			Array.from(document.querySelector("#app > div > div > div.styles__questionContainer___3Aq4Z-camelCase > div > div.styles__answersHolder___3LYNs-camelCase").children).forEach(pa=>{
				if (pa.innerText == ansr) {
					pa.children[0].click()
				}
			})
		}
	}
	gar()
},1)
