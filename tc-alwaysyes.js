let gid = prompt("Set id (search it in the blooket website, and copy from the address bar)")
let bdata = {};


const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		bdata = JSON.parse(this.responseText);
	}
});

xhr.open("GET", `https://api.blooket.com/api/games?gameId=${gid}`);

xhr.send(data);
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
  
  if (document.querySelector(".styles__guestButtonInside___3TUNB-camelCase")) {
    document.querySelector(".styles__guestButtonInside___3TUNB-camelCase")
  }
},1)
