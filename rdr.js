let gid = parseInt(prompt("Set id (for now)"))
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
	qid = document.querySelector("#app > div > div > div.styles__questionContainer___34aw8-camelCase > div > div.styles__questionContainer___1Zi84-camelCase > div.styles__questionText___10zyP-camelCase > div").innerText;
	alert(get(bdata,quid))
}
