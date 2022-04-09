let bdata = {};

setInterval(()=>{
	if (document.querySelector("#header > div.styles__headerTextLeft___3zPwI-camelCase > i.styles__readIcon___2wn6q-camelCase.fas.fa-volume-up")) {
		setTimeout = function (f, time) {
    			f()
		}
	}
},1)

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
		let ansr = get(bdata,document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__questionContainer___3u_c9-camelCase > div").innerText)
		Array.from(document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__answersHolder___3LYNs-camelCase").children).forEach(pa=>{
			if (pa.innerText == ansr) {
				pa.children[0].click()
			}
		})
	}
	gar()
},1)
