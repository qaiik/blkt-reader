let gid = prompt("Set id (for now)")
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
window.onkeyup = ()=>{
	qid = document.querySelector(".styles__questionText___10zyP-camelCase").innerText;
	let answer = get(bdata,qid)
	let ab = document.querySelector(".styles__answersHolder___1tefk-camelCase").children;
	Array.from(ab).forEach((c)=>{
		if (c.innerText == answer) {
			c.click()
		}
	})
	
}
