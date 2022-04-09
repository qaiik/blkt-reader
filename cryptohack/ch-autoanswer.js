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
    if (document.querySelector("#app > div > div > div.styles__questionContainer___1u3eL-camelCase > div > div.styles__questionContainer___3u_c9-camelCase > div > div")) {
        setTimeout = origST;
	gar = ()=>{
		if (document.querySelector("#app > div > div > div.styles__questionContainer___3Aq4Z-camelCase > div > div.styles__questionContainer___3u_c9-camelCase > div.styles__questionText___2MlSZ-camelCase > div")) {
			
			let ansr = get(bdata,document.querySelector("#app > div > div > div.styles__questionContainer___1u3eL-camelCase > div > div.styles__questionContainer___3u_c9-camelCase > div > div").innerText)
			Array.from(document.querySelector("#app > div > div > div.styles__questionContainer___1u3eL-camelCase > div > div.styles__answersHolder___3LYNs-camelCase").children).forEach(pa=>{
				if (pa.innerText == ansr) {
					pa.children[0].click()
				}
			})
		}
	}
	gar()
},1)

// document.querySelector("#app > div > div > div.styles__questionContainer___1u3eL-camelCase > div > div.styles__questionContainer___3u_c9-camelCase > div > div")
