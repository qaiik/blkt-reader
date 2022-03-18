let gid = prompt("Set id (search it in the blooket website, and copy from the address bar)")
let bdata = {};

((() => {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        if (arguments[1].startsWith("https://api.blooket.com/api/games?gameId=")) {
            this.addEventListener('load', function() {
                bdata = JSON.parse(this.responseText);
            });   
        }
        
        origOpen.apply(this, arguments);
    };
}))();

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
let h = ()=>{
	qid = document.querySelector(".styles__questionText___10zyP-camelCase").innerText;
	let answer = get(bdata,qid)
	let ab = document.querySelector(".styles__answersHolder___1tefk-camelCase").children;
	Array.from(ab).forEach((c)=>{
		if (c.innerText == answer) {
			c.children[0].click();
		}
	})
	
}

setInterval(()=>{
	if (document.querySelector(".styles__questionText___10zyP-camelCase")) {
		h()
	}
	if (document.querySelector(".fa-check")) {
		document.querySelector(".fa-check").click()
	}
  
  if (document.querySelector(".styles__guestButton___2jiD9-camelCase")) {
    document.querySelector(".styles__guestButton___2jiD9-camelCase").click()
  }
},1)
